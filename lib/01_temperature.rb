def ctof(t)
    t = t * 1.8
    t = t + 32
    return t.round(1)
    end
    
    def ftoc(t)
    t = t - 32
    t =  t / 1.8
    return t.round(1)
    end