package com.example.grupo8.spaceinvaders;

import android.content.Context;
import android.test.ActivityUnitTestCase;
import android.test.mock.MockContext;
import android.view.View;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.TextView;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import cucumber.api.CucumberOptions;

/**
 * Created by Pablo on 21/04/2017.
 */

@CucumberOptions(
        features = {"classpath:features"},
        format = { "pretty","html: cucumber-html-reports", "json: cucumber-html-reports/cucumber.json" })
public class CucumberStepDefs extends ActivityUnitTestCase<GameActivity> {

    GameActivity gameActivity;

    public CucumberStepDefs() {
        super(GameActivity.class);
    }

    @Before
    public void before() throws Exception {
        super.setUp();
        this.gameActivity = new GameActivity();
        Context context = new MockContext();
        gameActivity.misilVerde = new ImageView(context);
        gameActivity.misilRojo = new ImageView(context);
        gameActivity.jugador = new ImageButton(context);
        gameActivity.escudo1 = new ImageView(context);
        gameActivity.escudo2 = new ImageView(context);
        gameActivity.escudo3 = new ImageView(context);
        gameActivity.enemigos = new ImageView[20];
        for (int i=0; i<20;i++){
            gameActivity.enemigos[i]= new ImageView(context);
        }
        gameActivity.tx = new TextView(context);
        gameActivity.txt_lives = new TextView(context);
    }


    @Given("^The match has been correctly initialized$")
    public void the_match_has_been_correctly_initialized() throws Throwable {
        assertTrue(this.gameActivity.lives == 3);
        assertNotNull(gameActivity.han_MovimientoCaza);
        assertNotNull(gameActivity.han_MovimientoCaza);
        assertNotNull(gameActivity.han_MisilRojo);
        assertNotNull(gameActivity.han_MisilVerde);
        assertNotNull(gameActivity.misilVerde);
        assertEquals(gameActivity.enemigos.length, 20);
        assertEquals(gameActivity.enemiesInitialHeight, 300);
    }

    @When("^Clicks on the ship$")
    public void clicks_on_the_ship() throws Throwable {
        gameActivity.disparo(null);
    }

    @Then("^The ship will launch a misil$")
    public void the_ship_will_launch_a_misil() throws Throwable {
        assertTrue(gameActivity.misilVerde.getVisibility() == View.VISIBLE);
    }

    @Then("^Enemy (.+) will be defeated$")
    public void enemy_will_be_defeated(String enemynumber) throws Throwable {
        int i = Integer.parseInt(enemynumber);
        assertTrue(gameActivity.enemigomuerto);
    }

    @Then("^The score of the user will be (.+)$")
    public void the_score_of_the_user_will_be(String newscore) throws Throwable {
        int s = Integer.parseInt(newscore);
        assertEquals(s, gameActivity.score);
    }

    @And("^Misil reaches the enemy number (.+)$")
    public void misil_reaches_the_enemy_number(String enemynumber) throws Throwable {
        int i = Integer.parseInt(enemynumber);
        gameActivity.matarEnemigo(i);
    }

    @And("^The user has (.+) points$")
    public void the_user_has_points(String score) throws Throwable {
        int s = Integer.parseInt(score);
        this.gameActivity.score = s;
    }

    @And("^The user has (.+) lives$")
    public void the_user_has_lives(String lives) throws Throwable {
        int l = Integer.parseInt(lives);
        this.gameActivity.lives = l;
    }

    @And("^Misil reaches an enemy$")
    public void misil_reaches_an_enemy() throws Throwable {
        gameActivity.matarEnemigo(0);
    }

    @And("^The lives of the user will be (.+)$")
    public void the_lives_of_the_user_will_be(String newlives) throws Throwable {
        int l = Integer.parseInt(newlives);
        assertEquals(l, gameActivity.lives);
    }

}
