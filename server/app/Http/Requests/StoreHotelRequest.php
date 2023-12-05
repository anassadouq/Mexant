<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreHotelRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'min:3|max:30',
            'tel' => 'min:10|max:12',
            'adresse' => "required"
        ];
    }
}