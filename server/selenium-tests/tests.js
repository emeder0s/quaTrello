const { By, Key, Builder } = require("selenium-webdriver");
const jwt = require("jsonwebtoken");
const assert = require("assert");
require("chromedriver");


/**
 * Test Login
 */
async function test_login(driver,url){
    await driver.get(url);
    let email = await driver.findElement(By.name('email')).sendKeys("email1@email.com", Key.RETURN);
    await driver.findElement(By.name('pass')).sendKeys("1234", Key.RETURN);
    await driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/div/div/form/button')).click();

    const infoJwt = jwt.sign({ email, "id": 1, "full_name":"User 1" }, "m1c4s4");
    var sesionCookie = await driver.manage().getCookie('session')
    assert.strictEqual(sesionCookie, infoJwt)
    
}

   

/**
 * Test Add WS from Aside
 */
async function test_new_ws_from_aside(driver,url){
    await driver.get(url);
    await driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/div/div/div[2]/div[1]/div/button[1]')).click();
    //await driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/div/aside/div/div/button')).click();
    
}

/**
 * Test add board form home
 */
async function test_new_board_from_home(url){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get(url);
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
    // await test_new_board_from_home("http://127.0.0.1:3000/home");
    
    //Cerramos el navegador
    //await driver.quit();
}

test();