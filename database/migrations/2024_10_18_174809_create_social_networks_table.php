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
        Schema::create('social_networks', function (Blueprint $table) {
            $table->id();
            $table->text("company")->nullable();
            $table->text("facebook")->nullable();
            $table->text("youtube")->nullable();
            $table->text("instagram")->nullable();
            $table->text("tiktok")->nullable();
            $table->text("x")->nullable();
            $table->foreignId('directory_id')->constrained('directories');
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
        Schema::dropIfExists('social_networks');
    }
};
