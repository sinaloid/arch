<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('maisons', function (Blueprint $table) {
            $table->id();
            $table->string("nom");
            $table->string("adresse");
            $table->string("description");
            $table->string("nombre_chambres");
            $table->string("nombre_douches");
            $table->string("nombre_cuisines");
            $table->string("secteur")->nullable();
            $table->string("longitude")->nullable();
            $table->string("latitude")->nullable();
            $table->string("etat")->nullable();
            $table->string("prix");

            $table->unsignedBigInteger('commune_id');
            $table->foreign('commune_id')
                    ->references('id')
                    ->on('communes')
                    ->onDelete('restrict')
                    ->onUpdate('restrict');
                    
            $table->unsignedBigInteger('categorie_maison_id');
            $table->foreign('categorie_maison_id')
                    ->references('id')
                    ->on('categorie_maisons')
                    ->onDelete('restrict')
                    ->onUpdate('restrict');

            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')
                    ->references('id')
                    ->on('users')
                    ->onDelete('restrict')
                    ->onUpdate('restrict');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('maisons');
    }
};
