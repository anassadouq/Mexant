<?php

namespace App\Http\Controllers;

use App\Models\Freedom;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Http\Request;

class FreedomController extends Controller {

    public function index(){
       return Freedom::select('id','name','email','phone' ,'adresse')->get();
    }

    public function store(Request $request){
        $request->validate([
            'name'=>'required',
            'email' => 'required',
            'phone' => 'required',
            'adresse' => 'required',
        ]);

        Freedom::create($request->post());
        return response()->json([
            'message'=>'Item added successfully'
        ]);
    }

    public function show(Freedom $freedom){
        return response()->json([
            'freedom' => $freedom
        ]);
    }
 
    public function update(Request $request, Freedom $freedom){
        $request->validate([
            'name'=>'required',
            'email' => 'required',
            'phone' => 'required',
            'adresse' => 'required',
        ]);

        $freedom->fill($request->post())->update();
        return response()->json([
            'message' => 'Item updated successfully'
        ]);
    }

    public function destroy(Freedom $freedom){

        $freedom->delete();
        return response()->json([
            'message' => 'Item deleted successfully'
        ]);
    }
}