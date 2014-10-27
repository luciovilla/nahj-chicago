<?php

/** Include Genesis to use with WordPress */
require_once(dirname(__FILE__) . '/../bower_components/genesis-wordpress/src/Genesis.php');

/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'wordpress');

/** MySQL database password */
define('DB_PASSWORD', 'UIg0Afj+waWM6swi');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'qJ(5#x89f!~NaGmZ?%5|d3<X^$a{y?KD WaT3Yp_w(v}UIgH|uH}:Lth;Tr&D-Q+');
define('SECURE_AUTH_KEY',  '-Pa+[qt@U6$,^V5Y_;;J 1AeF-#!U -E2iA-iGmv^E1EbPM/~,X[7Q>B=f=Q 1D(');
define('LOGGED_IN_KEY',    '|3~jB+%|-~/{dE+xy;y2u:s}g53IfJ;##Lr`kn_)&wN<wF %`zF|CME!0hMK;B)d');
define('NONCE_KEY',        'W#hPhe0hp5|!N:uhPfr-5+$*|+BbfM6;lBa6_g_[U5Xa26w/+n,Iy6[&1S^T?<%M');
define('AUTH_SALT',        '.Jb0)v+1D5V&iaU;BuiFB{-^T!:**B._u1U_L6{i&yu:9NSt!W=3t2q@N):&%F|*');
define('SECURE_AUTH_SALT', 'r+||FI+%Htd3IEnFh4gExcHF#8u8~+q>^coJa?V.p>&tW^cRd$O[v?;yoa0)/d#6');
define('LOGGED_IN_SALT',   '>Z/:407x5WzYc/n#$,1Qr?{jsnaB6Gm?A(E1-_F-u? + --tp,.Md.kDTv&Ys*)=');
define('NONCE_SALT',       '3[eF(N>r$e|>%jT`q=_UD$+Y~gDv/Y%l}+FMd486tfF4+(PbN{@,x@F#l+,-wcGD');


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', WP_ENV === 'local');

define('WP_POST_REVISIONS', 5);

define('WP_AUTO_UPDATE_CORE', false);

define('FS_METHOD', 'direct');

/*That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

if (WP_ENV !== 'www') {
  Genesis::rewriteUrls();
}
