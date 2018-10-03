def example1():
	# Python Lists are similar to arrays in C and vectors in C++
	# but they are a category of "collection".
	
	three = 3
	
	a = [[-1, 0], 1, 'two', three, 4.0, 20/4, '6']
	a[0] = "zero"
	# Unlike strings in python (immutable character lists)
	# lists are mutable, which means changable.
	
	# Lists in Python are not type restricted like arrays in C and
	# C++, so in that way they differ. For example, list 'a' above
	# is comprised of sublist, an integer, a string,
	# the value of variable 'three', a float, a (math) expression,
	# and the character (string with length 1) '6'.
	# All are valid.
	
	b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	
	# SOMETIMES faster than map or for loop, probably most of the time.
	c = [x for x in range(0, 11)]
	c = b
	print('(b == c) -> ', b == c)
		# True, because the length (size in some languages)
		# AND the elements are all equal.
		# The "==" operator in Python compares logical or mathematical
		# equivalence.
	
	print('(b is c) ->', b is c)
		# NOT (usually) True, ie almost always False
		# (Rely on this being false)
		# The "is" operator compares two objects' memory addresses/IDs,
		# ie, if "b is c" == True, then b and c are not just equal,
		# but the SAME object in memory.
	d = [x**2 for x in range(0,11)]
	# Creates a list of squares from 0^2 to 10^2.
	
	e = [x**2 for x in range(0,50) if (x**2 % 5 == 0)]
	# Creates a list of squares from 0^2 to 49^2 IF the square is a multiple of 5.
	
	f = [(x, y, x * y) for x in range(1, 11) 
		for y in range(10, 21) if (((x + 1) % 2) == 0)]
	# A more complicated example.  You can even use multiple variables/for
	# statements, eg for x and for y, still in addition to a conditional at the end.
	
	g = [x for x in 'THIS IS A STRING' if x in ['A', 'E', 'I', 'O', 'U']]
	# Python will even loop through characters in a string in list comprehensions.
	
	#This just prints all of the above lists.
	print(a, b, c, d, e, f, g, sep='\n\n')

def lmethods():
	### List methods:
	
	example = ['first']
	
	# "pushes" arguments onto the end of a list
	print(example, 'then append 7: ', end='')
	example.append(7)
	print(example) ###> ['first', 7]
	
	# extends list with another iterable
	# DIFFERENT than concatenation.
	# for example:
	# lista + listb will concatenate the lists, like lista.extend(listb)
	# however to extend by the values in a generator, for example
	# one must use 'lista.extend(generatora)', otherwise Python will
	# insert the entire generator object into the end of 'lista'.
	
	print(example, 'then extend with generator: ', end='')
	example.extend(range(4))
	print(example)
	
	# Other methods:
	
	example.insert(0, 'inserted at position 0') # .insert(position, value)
	# insert is IN PLACE
	example.remove(3) # removes the first instance of 1st arg value
	# raises error if value is not present
	example.pop(4)         # .pop([n])  pops nth element, if empty, 
			       # pops last
	example.clear()        # clears list IN PLACE
	example.extend(range(0, 10)) # ignore, just resetting 'example' with values.
	example.index(0, 0, 4) # .index(value[, start[, end]])
	example.count(2)       # returns quantity of instances of arg value 
			       # in the list
	example.sort()         # sorts list IN PLACE 
			       #(can add optional 'key=key' / 'reverse=True')
	example.reverse()      # reverses the list IN PLACE
	example.copy()         # returns SHALLOW COPY of list
	example[:]
	# list splicing:
	# example[x:y:z]   x = start, y = stop (EXCLUSIVE), z = step
	example[::-1]          # returns a COPY of reversed list
	# del example[0]       # "pops" index 0 WITHOUT returning the value
	# replace:
	# example[index of old value] = newvalue

def mx():
	matrix = [[1, 2, 3, 4],
		  [5, 6, 7, 8],
		  [9, 10, 11, 12]]
	transposed = [[row[i] for row in matrix] for i in range(4)]
	[print(x) for x in transposed]
	

def generators():
	# same general syntax as list comprehensions, except wrapped in
	# parentheses () instead of square brackets []
	# can get complex when using yield and async (advanced)
	
	# explain iterable vs iterator
	# iter() function converts object into iterator object
	# next() function is called on an interator to iterate 
	# to the next element.
	# StopIteration exception raised when no more elements to iterate.
	
	example = (x for x in range(1, 10))
	print(example)  # this prints the __repr__ attribute, or "string
			# representation" of an object.
	print(next(example), next(example))



# and we still haven't covered Tuples, Sequenes, Sets, and all the other types
# of Collections!

selection = -1
while 1:
	selection = str(input('Choose a function: '))
	if (selection == '0'):
		break
	else:
		print(selection)
		eval(selection)
		print('\n\n')