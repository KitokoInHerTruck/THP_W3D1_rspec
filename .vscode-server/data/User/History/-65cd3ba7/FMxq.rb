puts "Quelle année es-tu né"
nombre = gets.chomp.to_i
puts "décompte jusqu'à ce nombre"
for i in nombre
  puts nombre
  nombre = nombre + 1
end