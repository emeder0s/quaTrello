const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

/**
 * Test Login
 */
async function test_login(driver,url){
    console.log(url);
    await driver.get(url);
    await driver.findElement(By.name('email')).sendKeys("email1@email.com", Key.RETURN);
    await driver.findElement(By.name('pass')).sendKeys("1234", Key.RETURN);
    await driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/div/div[2]/form/button')).click();
}

/**
 * Test Add WS from Aside
 */
async function test_new_ws_from_aside(driver,url){
    console.log(url);
    await driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/div/aside/div/div/button')).click();
}

/**
 * Test add board form home
 */
async function test_new_board_from_home(driver,url){
    console.log(url);
    await driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/div/div/div[2]/div[1]/div/button')).click();
}


/**
 * Test Completo
 */
async function test() {

    let driver = await new Builder().forBrowser("chrome").build();

    //LOGIN
    await test_login(driver,"http://127.0.0.1:3000/login");
    alert("test login - correcto");
    
    //NEW WS fROM ASIDE
    await test_new_ws_from_aside(driver,"http://127.0.0.1:3000/home");

    //NEW
    await test_new_board_from_home(driver,"http://127.0.0.1:3000/home");
    
    //Cerramos el navegador
    //await driver.quit();
}

test();