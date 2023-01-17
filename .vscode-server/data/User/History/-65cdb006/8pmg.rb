puts "Donne moi un nombre STP"
nombre = gets.chomp.to_i
  i = 1
puts "décompte jusqu'à ce nombre"
for i in 1 ..nombre
nombre.times do
        puts i
        i = i + 1
    end
