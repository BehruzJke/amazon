describe('Smoke tests', ()=>{
    it('User can navigate through homepage',async () => {
        await driver.pause(10000)
        //Assert the navigation menus
       await expect($('~FOR YOU')).toExist()
       await expect($('~GAMES')).toExist()
       await expect($('~TOP CHARTS')).toExist()
       await expect($('~RECOMMENDED')).toExist()
       //Assert elements in GAMES tab
       await $('~GAMES').click()
       await expect($('//*[@text="Top Grossing in Games"]')).toExist()
       await expect($('//*[@text="Top Free in Games"]')).toExist()
       await driver.pause(5000)
       driver.touchAction([
        {action: 'press', x: 552, y: 489},
        {action: 'moveTo', x: 501, y: 1304},
        'release'
      ]);
      
       await expect($('//*[@text="Recommended for You"]')).toExist()
        driver.touchAction([
        {action: 'press', x: 545, y: 1507},
        {action: 'moveTo', x: 518, y: 485},
        'release'
      ]);
       await expect($('//*[@text="Top Paid in Games"]')).toExist()
         driver.touchAction([
        {action: 'press', x: 521, y: 1066},
        {action: 'moveTo', x: 506, y: 501},
        'release'
      ]);
       await expect($('//*[@text="New for you in Games"]')).toExist()
       //Assert the elements in TOP CHARTS
       await $('~TOP CHARTS').click()
       await expect($('//*[@text="Top Paid"]')).toExist()
       await expect($('//*[@text="Top Free Downloads"]')).toExist()
       await expect($('//*[@text="Top Grossing"]')).toExist()
       //Assert tge elements in Recommended
       await $('~RECOMMENDED').click()
    })

    it('User can browse categories',async () => {
        
    })

    it('User can search a game', () => {
        
    })

    it('User can install the app', () => {
        
    })

    it('User can open the app in my apps menu', () => {
        
    })
})