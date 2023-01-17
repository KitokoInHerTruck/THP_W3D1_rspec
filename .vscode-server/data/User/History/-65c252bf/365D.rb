   puts "Quelle est ton année de naissance ?"
    birth_year = gets.chomp.to_i
    current_year = 2023
    i = current_year - birth_year + 1 
    age = 0
    increment = current_year - birth_year 

    i.times do
        if birth_year != 2023 then
            if increment != age then
                puts "En #{birth_year}, il y a #{increment} ans, tu avais #{age} ans"
                birth_year = birth_year + 1
                age = age + 1
                increment = increment - 1
            elsif increment == age then
                puts "En #{birth_year}, il y a #{increment} ans, tu avais la moitié de l'âge que tu as aujourd'hui"
                birth_year = birth_year + 1
                age = age + 1
                increment = increment - 1
            end
        elsif birth_year == 2023 then
            puts "Et cette année 2023, tu auras #{age} ans !"
        end
    end