package com.cucumber_demo.Cucumber_demo;

import org.junit.runner.RunWith;

import io.cucumber.junit.*;

@RunWith(Cucumber.class)
@CucumberOptions(features="Features", glue={"com.cucumber_demo.Cucumber_demo"}, publish=true)

public class Runner {

}
