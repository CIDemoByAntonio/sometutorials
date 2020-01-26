package com.w2a;

import org.junit.After;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class LoginToFacebookSteps {
	
public static WebDriver driver;

@Before
public void setUp() {
	System.setProperty("webdriver.chrome.driver", "D:\\Drivers\\chrome\\chromedriver.exe");
	driver = new ChromeDriver();
	
}
@After
public void tearDown(Scenario scenario) {
	if (scenario.isFailed()) {
		System.out.println("Oops, something went wrong");
	}
	driver.quit();
}

@Given("^the user is on facebook login page$")
public void the_user_is_on_facebook_login_page() throws Throwable {
	driver.get("https://www.facebook.com/");
    System.out.println(driver.getTitle());
}

@When("^he enters \"([^\"]*)\" as a user name$")
public void he_enters_as_a_user_name(String arg1) throws Throwable {
    driver.findElement(By.xpath("//*[@ name='email'] [@id='email']")).sendKeys(arg1);
}

@When("^he enters \"([^\"]*)\" as password$")
public void he_enters_as_password(String arg1) throws Throwable {
   driver.findElement(By.xpath("//*[@name='pass'] [@id='pass']")).sendKeys(arg1);
    
}

@Then("^check username is present in textbox$")
public void check_username_is_present_in_textbox() throws Throwable {
    driver.findElement(By.xpath("//*[@id='loginbutton']")).click();
    System.out.println(driver.getTitle() );
}


}
