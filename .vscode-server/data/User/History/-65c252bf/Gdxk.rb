puts "Quelle année es-tu né ?"
année = gets.chomp.to_i
aujourdhui = 2023
ageN = 0
moitie = ageN / 2
puts "compte chaque année jusqu'aujourd'hui"
for i in année..aujourdhui
  
  année = année + 1
  ageN = ageN + 1
if ageN == moitie
puts "En #{année} tu avais la moitié de l'âge que tu as aujourd'hui"
breack
end
end