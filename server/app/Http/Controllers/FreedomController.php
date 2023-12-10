<?php

namespace App\Http\Controllers;

use App\Models\Freedom;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Http\Request;

class FreedomController extends Controller {

    public function index()
    {
        return response(Freedom::all());
    }

    public function store(Request $request){

        Freedom::create($request->all());
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
        $freedom->update($request->all());
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