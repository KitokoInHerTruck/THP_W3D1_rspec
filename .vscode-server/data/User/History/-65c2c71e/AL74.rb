puts "Quelle année es-tu né ?"
année = gets.chomp.to_i
aujourdhui = 2023
age = 0
puts "compte chaque année jusqu'aujourd'hui"
for i in année..aujourdhui
  if age == 0
    puts "En #{année}, tu avais entre 0 et 12 mois"
    if age != 0
      puts 
    end
  année = année + 1
  age = age + 1
end
