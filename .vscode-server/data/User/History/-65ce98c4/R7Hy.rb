puts "Donne un nombre stp"
nombre = gets.chomp.to_i
nombre.time do
puts "Bonjour toi !#{nombre - 1}"
end