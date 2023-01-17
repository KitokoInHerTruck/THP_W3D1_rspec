puts "Donne moi un nombre STP"
nombre = gets.chomp.to_i
puts "décompte jusqu'à ce nombre"
for i in 0 ..nombre
  puts nombre
  nombre = nombre-1
end