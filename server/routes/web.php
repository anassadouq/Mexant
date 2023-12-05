<?php
use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;      


Route::get('/', function () {
    return view('welcome');
});

Route::get('products', function(){
    return("<h1>The page of products</h1>");
});

Route::get('users/{id}/{name}',function($id,$name){
    return 'Hello Mr '.$name." your Id is ".$id;
})->where('id','[0-9]+','name','[a-z]+');

Route::get('/name/{id}',function($id){
    return 'This is '.$id;
});

Route::get("buy",function(){
    return'i want to buy something';
});

Route::get('buy/{something}',function($something){
    return 'i want to buy a '.$something;
});

Route::get('congratulation/{name}/{mark}' , function($name,$mark){
    return "Congratulation $name ,you got $mark";
})->middleware('CheckMark');


Route::view("call","addCity");
Route::post('receive', function(){
    return "The city is created";
})->name('city');

//Controller
Route::get("add",[StudentController::class,'addStudent']);
Route::post("student/store",[StudentController::class,'storeStudent']);

//Request
use Illuminate\Http\Request;
Route::get('call',function(){
    return response()
    ->json([
        "admin" => "med",
        "manager" => "karima"
    ])
    ->header('content-Type','json only');

});

//Model
use App\Models\Country;
Route::get('call',function(){
    dd(Country::all());
});

use App\Models\Stagiaire;

Route::get('list',function(){
    Stagiaire::factory(10)->create();
    dd(Stagiaire::all());
});

use App\Http\Controllers\StagiaireController;
Route::get('liststa',[StagiaireController::class,'index']);

use App\Http\Controllers\CompanyController;
Route::get('company',[CompanyController::class,'index']);


// DATABASE : STORE
use App\Http\Controllers\StoreController;
Route::resource('store',StoreController::class);

// DATABASE : HOTEL
use App\Http\Controllers\HotelController;
Route::resource('hotel',HotelController::class);