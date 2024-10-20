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
        Schema::create('image_file', function (Blueprint $table) {
            $table->id();
            $table->string('image_file_title'); 
            $table->string('image_file_content');
            $table->string('image_file_description');
            $table->tinyInteger('image_file_status')->comment('1 = shown, 0 = hidden')->default(0);
            $table->tinyInteger('image_file_shows_in')->comment('1 = slider, 0 = home');
            $table->softDeletes();
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
        Schema::dropIfExists('image_file');
    }
};
