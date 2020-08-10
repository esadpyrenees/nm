<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit45a522cc481f3a000a8b0f17388d1766
{
    public static $prefixLengthsPsr4 = array (
        'K' => 
        array (
            'Kirby\\' => 6,
        ),
        'B' => 
        array (
            'Bnomei\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Kirby\\' => 
        array (
            0 => __DIR__ . '/..' . '/getkirby/composer-installer/src',
        ),
        'Bnomei\\' => 
        array (
            0 => __DIR__ . '/../..' . '/classes',
        ),
    );

    public static $classMap = array (
        'Bnomei\\Feed' => __DIR__ . '/../..' . '/classes/Feed.php',
        'Kirby\\ComposerInstaller\\CmsInstaller' => __DIR__ . '/..' . '/getkirby/composer-installer/src/ComposerInstaller/CmsInstaller.php',
        'Kirby\\ComposerInstaller\\Installer' => __DIR__ . '/..' . '/getkirby/composer-installer/src/ComposerInstaller/Installer.php',
        'Kirby\\ComposerInstaller\\Plugin' => __DIR__ . '/..' . '/getkirby/composer-installer/src/ComposerInstaller/Plugin.php',
        'Kirby\\ComposerInstaller\\PluginInstaller' => __DIR__ . '/..' . '/getkirby/composer-installer/src/ComposerInstaller/PluginInstaller.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit45a522cc481f3a000a8b0f17388d1766::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit45a522cc481f3a000a8b0f17388d1766::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit45a522cc481f3a000a8b0f17388d1766::$classMap;

        }, null, ClassLoader::class);
    }
}