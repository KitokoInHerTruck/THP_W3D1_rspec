puts "Quelle année es-tu né ?"
année = gets.chomp.to_i
puts "compte chaque année jusqu'aujourd'hui"
for i in année
  puts année
  année = année + 1
end