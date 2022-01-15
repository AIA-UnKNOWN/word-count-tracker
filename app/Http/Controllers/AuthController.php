<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Hash;
use Session;
use App\Models\User;

class AuthController extends Controller
{
    function registerPage(Request $request)
    {
        return view('auth.register');
    }

    function loginPage(Request $request)
    {
        return view('auth.login');
    }

    function register(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
            'confirm-password' => 'required|required_with:password|same:password'
        ]);
        $data = $request->all();
        $check = $this->create($data);

        return redirect(route('app'));
    }

    function create(array $data)
    {
        $user = new User;
        $user->username = $data['username'];
        $user->email = $data['email'];
        $user->password = Hash::make($data['password']);
        $user->save();
    }

    function login(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);

        $credentials = $request->only('username', 'password');
        if (! Auth::attempt($credentials)) {
            return redirect(route('login-page'));
        }
        
        return redirect()->intended('/');
    }

    function logOut() {
        Session::flush();
        Auth::logout();

        return redirect(route('login-page'));
    }
}
