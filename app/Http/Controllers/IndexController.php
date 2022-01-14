<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class IndexController extends Controller
{
    function __invoke(Request $request)
    {
        if (Auth::check()) {
            return view('app');
        }

        return redirect(route('login-page'));
    }
}
