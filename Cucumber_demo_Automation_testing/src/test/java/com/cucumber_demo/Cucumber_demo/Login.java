package com.cucumber_demo.Cucumber_demo;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.util.concurrent.TimeUnit;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.messages.types.Duration;

public class Login {

	WebDriver dr;
	 
	@SuppressWarnings("deprecation")
	@Given("Open banking app")
	public void chrome_browser_should_open() {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Dell\\Downloads\\chrome driver\\chromedriver.exe");
		// Creating an object to access the browser elements
		dr=new ChromeDriver();
		
        dr.get("http://localhost:3000/Login");
        dr.manage().window().maximize();

       
	}
	@And("login and add items to cart")
	public void createaccountnavigate() throws InterruptedException
	{
		
		
	
		WebDriverWait wait = new WebDriverWait(dr, java.time.Duration.ofSeconds(20)); 

		dr.findElement(By.id("Account number")).sendKeys("11100911273");
		Thread.sleep(4000);
		dr.findElement(By.id("password")).sendKeys("Abbas@123");
		Thread.sleep(4000);
		dr.findElement(By.id("confirm_pwd")).sendKeys("Abbas@123");
		Thread.sleep(4000);
		dr.findElement(By.id("Log")).click();
		Thread.sleep(4000);
		Alert alert=dr.switchTo().alert();
		alert.accept();
		Thread.sleep(8000);
		dr.findElement(By.id("shop")).click();
		Thread.sleep(4000);

		WebElement element = dr.findElement(By.xpath("/html/body/div[1]/div/div[3]/div/section/div[1]/div/div/div[1]/div[1]/div[3]/a/i"));


Actions actions = new Actions(dr);
actions.moveToElement(element).click().build().perform();
		
		
		Thread.sleep(3000);

		WebElement element1=dr.findElement(By.xpath("/html/body/div[1]/div/div[3]/div/section/div[1]/div/div/div[1]/div[1]/div[3]/a/i"));
		Actions actions1 = new Actions(dr);
		actions1.moveToElement(element1).click().build().perform();
		Thread.sleep(3000);
		
		WebElement element2=dr.findElement(By.xpath("/html/body/div[1]/div/div[3]/div/section/div[1]/div/div/div[1]/div[1]/div[3]/i"));
		Actions actions2 = new Actions(dr);
		actions2.moveToElement(element2).click().build().perform();
	Thread.sleep(4000);

		dr.findElement(By.id("checkout")).click();
		
		
		
	

	}




}
