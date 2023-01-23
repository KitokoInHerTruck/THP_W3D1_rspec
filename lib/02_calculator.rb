def add(a, b)
    a + b
end

def subtract(a, b)
    a - b
end

def sum(arr)
    arr.sum
end

def multiply(a, b)
    a * b
end

def power(a, n)
    a**n
end

def factorial(n)
    (1..n).inject(:*) || 1
end