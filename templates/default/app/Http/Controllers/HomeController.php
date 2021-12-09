<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $url = 'http://google.com';
        return Inertia::render('Home', ['welcomeMessage' => "welcome to My App \n The World is Yours \n By me a Coffee <a href=\"$url\">" ]);
    }
}
