#!/usr/local/bin/python3
import sys
import os
import re
import subprocess

# The path to ANTLR
ANTLR_PATH = '/usr/local/lib/antlr-4.7.2-complete.jar'

# The name of the root grammer rule
ROOT_GRAMMAR_RULE = 'program'

# A file that doesn't exists, and the script will use it to 
# store the input used to generate a script to execute.
# If the script DOES exists, it uses it instead.
TEST_PROGRAM_FILE = '__prog.txt'

# The language that ANTLR should create the lexer and parsers for.
PARSED_LANGUAGE = 'JavaScript'

class ConsoleColor:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

def clean(name):
    for f in os.listdir('.'):
        if re.match('^%s([^\.]*).(java|js|class|interp|tokens)$' % name, f):
            os.unlink(f)
    return

def build(name):
    os.system('java -Xmx500M -cp "%s:$CLASSPATH" org.antlr.v4.Tool %s.g4 -Dlanguage=%s' % (ANTLR_PATH, name, PARSED_LANGUAGE))
    if PARSED_LANGUAGE == '' or PARSED_LANGUAGE == 'Java':
        os.system('javac %s*.java' % name)

def run(name, extra):
    # Gets an input from the user, till she enters an empty line
    print('Enter the program contents. Use "quit;" or "q;" to stop prompting.')
    print('')

    predefined_script = True
    if not os.path.isfile(TEST_PROGRAM_FILE):
        predefined_script = False
        buffer = ''
        while True:
            data = input('> ').split()
            if len(data) == 0 or data[0] == 'quit;' or data[0] == 'q;':
                break
            buffer += ' '.join(data) + '\n'
    
        # Write the content on a temp file
        with open(TEST_PROGRAM_FILE, 'w') as fp:
            fp.write(buffer)
    
    # Show what we about to execute
    print(ConsoleColor.HEADER + 'Executing Script:' + ConsoleColor.ENDC)

    print('-' * 15, 'BEGIN CONTENTS', '-' * 15)
    print(ConsoleColor.BOLD, end='')
    with open(TEST_PROGRAM_FILE, 'r') as fp:
        print(fp.read(), end='')
    print(ConsoleColor.ENDC)
    print('-' * 15, 'END CONTENTS', '-' * 15)

    # Run!
    proc = 'java -Xmx500M -cp "%s:$CLASSPATH" org.antlr.v4.gui.TestRig %s %s -%s %s' % (ANTLR_PATH, name, ROOT_GRAMMAR_RULE, extra, TEST_PROGRAM_FILE)
    os.system(proc)

    # Remove the file
    if not predefined_script:
        os.unlink(TEST_PROGRAM_FILE)


if __name__ == "__main__":
    # Make sure we're with the right python version
    if sys.version_info[0] < 3:
        raise Exception("Must be using Python 3")

    # Make sure we got everything in place
    if len(sys.argv) < 2 or len(sys.argv) > 4:
        print('Usage: run.py <grammer name> <command?> <tree|gui|tokens?>')
        sys.exit(1)

    # Extract data
    grammar = sys.argv[1]
    command = 'run'
    extra = 'tokens'
    
    if not os.path.isfile(grammar + ".g4"):
        print('Could not find %s.g4 file!' % grammar)
        sys.exit(1)

    if len(sys.argv) == 3:
        command = sys.argv[2]
    
    if len(sys.argv) == 4:
        extra = sys.argv[3]
    
    print(ConsoleColor.HEADER + 'Executing command ' + command + '...' + ConsoleColor.ENDC)
    
    # What to do?
    if command == 'clean':
        clean(grammar)
    elif command == 'build':
        clean(grammar)
        build(grammar)
    elif command == 'run':
        clean(grammar)
        build(grammar)
        run(grammar, extra)
    else:
        print(ConsoleColor.ERROR + 'Unknown Command!' + ConsoleColor.ENDC)
        sys.exit(1)
    print('')
    print(ConsoleColor.OKGREEN + 'Done!' + ConsoleColor.ENDC)
    