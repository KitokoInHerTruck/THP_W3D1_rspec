puts "Quelle année es-tu né ?"
année = gets.chomp.to_i
aujourdhui = 2023

puts "compte chaque année jusqu'aujourd'hui"
for i in année..aujourdhui
  puts année
  année = année + 1
end