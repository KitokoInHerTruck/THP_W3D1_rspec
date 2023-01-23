def echo(str)
    return str
end

def shout(str)
    return str.upcase
end

def repeat(str, x=2)
    return [str]*x*' '
end

def start_of_word(str,x)
    return str[0,x]
end

def first_word(str)
    return str.split.first
end

def titleize(str)
    x = 0
    str.capitalize!()
    for i in 0...str.length
        if x == 1
            str[i] = str[i].upcase
            x = 0
        end
        if str[i] == " "
           x = 1
        end
    end
    str = str.split
    for i in 1...str.length
        if str[i].length < 4
            str[i] = str[i].downcase
        end
     end
    return str.join(" ")
end