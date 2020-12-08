---
title: Use PHP-CS-FIXER in VSCode
description: How to use php-cs-fixer in vscode.
date: 2021-02-12
permalink: articles/use-php-cs-fixer-in-vscode
image: /covers/use-php-cs-fixer-in-vscode.png
tags: 
    - php
    - composer
    - vscode
---

This one is a cool one. We are going to bring some code formatting for PHP into VSCode.

<!-- more -->

To follow this tutorial you will have [composer](/articles/install-composer-already) and [vscode](https://code.visualstudio.com/) installed.

`PHP-CS-FIXER` stands for _PHP code style fixer_ and it can be used to fix simple code style issues in your php files.

We will use composer to install it globally and use a vscode extension to make us of it inside our IDE.

## Install PHP-CS-FIXER

[PHP-CS-Fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer) can be installed globally through composer using the following command.

```bash
composer global require friendsofphp/php-cs-fixer
```

To use binaries that you have installed globally through composer on your command line, you need add the path to these to your `$PATH` variable. To do so add the following to your `~/.bashrc` or `~/.zshrc` file.

```bash
# add composer to path
if [ -d "$HOME/.config/composer/vendor/bin" ] ; then
    PATH="$HOME/.config/composer/vendor/bin:$PATH"
fi
```

To verify that everything worked you can run the following.

```bash
php-cs-fixer --version
# at the time of this writing it will print out
PHP CS Fixer 2.14.2 Sunrise by Fabien Potencier and Dariusz Ruminski
```

## Install PHP-CS-FIXER Extension

Next you will need to install the [extension php-cs-fixer](https://marketplace.visualstudio.com/items?itemName=junstyle.php-cs-fixer) to vscode. Using the extensions tab in vscode you can search for `php-cs-fixer` and click install.

## Configuration

The last thing you need to do is to create `.php_cs` configuration file so you can set up the code style rules you want to use. You can [download](https://gist.github.com/tjventurini/880a0a6c7830c83fa9e806362040588d) mine to have a starting point. Just download it and save it under `~/.php_cs`.

```php
<?php

$finder = PhpCsFixer\Finder::create()
    ->exclude(['bootstrap', 'node_modules', 'public', 'storage', 'vendor'])
    ->notPath('*')
    ->in(__DIR__);

return PhpCsFixer\Config::create()
    ->setRiskyAllowed(true)
    ->setRules(array(
        '@PSR2' => true,
        'array_indentation' => true,
        'array_syntax' => array('syntax' => 'short'),
        'combine_consecutive_unsets' => true,
        'method_separation' => true,
        'no_multiline_whitespace_before_semicolons' => true,
        'single_quote' => true,
        'binary_operator_spaces' => array(
            'align_double_arrow' => true,
            'align_equals' => true,
        ),
        // 'blank_line_after_opening_tag' => true,
        // 'blank_line_before_return' => true,
        'braces' => array(
            'allow_single_line_closure' => true,
        ),
        // 'cast_spaces' => true,
        // 'class_definition' => array('singleLine' => true),
        'concat_space' => array('spacing' => 'one'),
        'declare_equal_normalize' => true,
        'function_typehint_space' => true,
        'hash_to_slash_comment' => true,
        'include' => true,
        'lowercase_cast' => true,
        // 'native_function_casing' => true,
        // 'new_with_braces' => true,
        // 'no_blank_lines_after_class_opening' => true,
        // 'no_blank_lines_after_phpdoc' => true,
        // 'no_empty_comment' => true,
        // 'no_empty_phpdoc' => true,
        // 'no_empty_statement' => true,
        'no_extra_consecutive_blank_lines' => array(
            'curly_brace_block',
            'extra',
            'parenthesis_brace_block',
            'square_brace_block',
            'throw',
            'use',
        ),
        // 'no_leading_import_slash' => true,
        // 'no_leading_namespace_whitespace' => true,
        // 'no_mixed_echo_print' => array('use' => 'echo'),
        'no_multiline_whitespace_around_double_arrow' => true,
        // 'no_short_bool_cast' => true,
        // 'no_singleline_whitespace_before_semicolons' => true,
        'no_spaces_around_offset' => true,
        // 'no_trailing_comma_in_list_call' => true,
        // 'no_trailing_comma_in_singleline_array' => true,
        // 'no_unneeded_control_parentheses' => true,
        'no_unused_imports' => true,
        'no_whitespace_before_comma_in_array' => true,
        'no_whitespace_in_blank_line' => true,
        // 'normalize_index_brace' => true,
        'object_operator_without_whitespace' => true,
        // 'php_unit_fqcn_annotation' => true,
        'phpdoc_align' => true,
        // 'phpdoc_annotation_without_dot' => true,
        // 'phpdoc_indent' => true,
        // 'phpdoc_inline_tag' => true,
        // 'phpdoc_no_access' => true,
        // 'phpdoc_no_alias_tag' => true,
        // 'phpdoc_no_empty_return' => true,
        // 'phpdoc_no_package' => true,
        // 'phpdoc_no_useless_inheritdoc' => true,
        // 'phpdoc_return_self_reference' => true,
        // 'phpdoc_scalar' => true,
        // 'phpdoc_separation' => true,
        // 'phpdoc_single_line_var_spacing' => true,
        // 'phpdoc_summary' => true,
        // 'phpdoc_to_comment' => true,
        // 'phpdoc_trim' => true,
        // 'phpdoc_types' => true,
        // 'phpdoc_var_without_name' => true,
        // 'pre_increment' => true,
        // 'return_type_declaration' => true,
        // 'self_accessor' => true,
        // 'short_scalar_cast' => true,
        'single_blank_line_before_namespace' => true,
        // 'single_class_element_per_statement' => true,
        // 'space_after_semicolon' => true,
        // 'standardize_not_equals' => true,
        'ternary_operator_spaces' => true,
        // 'trailing_comma_in_multiline_array' => true,
        'trim_array_spaces' => true,
        'unary_operator_spaces' => true,
        'whitespace_after_comma_in_array' => true,
        'ordered_imports' => [
            'sort_algorithm' => 'length',
        ],
    ))
//    ->setRules([
//        '@PSR2' => true,
//        'array_syntax' => ['syntax' => 'short'],
//        'binary_operator_spaces' => true,
//        'blank_line_after_namespace' => true,
//        'blank_line_after_opening_tag' => true,
//        'blank_line_before_return' => true,
//        'braces' => true,
//        'cast_spaces' => true,
//        'class_attributes_separation' => true,
//        'class_definition' => true,
//        'concat_space' => ['spacing' => 'none'],
//        'declare_equal_normalize' => ['space' => 'none'],
//        'elseif' => true,
//        'encoding' => true,
//        'full_opening_tag' => true,
//        'function_declaration' => ['closure_function_spacing' => 'one'],
//        'function_typehint_space' => true,
//        'heredoc_to_nowdoc' => true,
//        'include' => true,
//        'increment_style' => ['style' => 'post'],
//        'linebreak_after_opening_tag' => true,
//        'list_syntax' => ['syntax' => 'short'],
//        'lowercase_cast' => true,
//        'lowercase_constants' => true,
//        'lowercase_keywords' => true,
//        'lowercase_static_reference' => true,
//        'magic_constant_casing' => true,
//        'magic_method_casing' => true,
//        'method_argument_space' => true,
//        'multiline_whitespace_before_semicolons' => ['strategy' => 'no_multi_line'],
//        'native_function_casing' => true,
//        'no_blank_lines_after_class_opening' => true,
//        'no_blank_lines_after_phpdoc' => true,
//        'no_closing_tag' => true,
//        'no_empty_phpdoc' => true,
//        'no_empty_statement' => true,
//        'no_extra_blank_lines' => true,
//        'no_leading_import_slash' => true,
//        'no_leading_namespace_whitespace' => true,
//        'no_mixed_echo_print' => true,
//        'no_multiline_whitespace_around_double_arrow' => true,
//        'no_short_bool_cast' => true,
//        'no_singleline_whitespace_before_semicolons' => true,
//        'no_spaces_after_function_name' => true,
//        'no_spaces_around_offset' => true,
//        'no_spaces_inside_parenthesis' => true,
//        'no_trailing_comma_in_list_call' => true,
//        'no_trailing_comma_in_singleline_array' => true,
//        'no_trailing_whitespace' => true,
//        'no_trailing_whitespace_in_comment' => true,
//        'no_unneeded_control_parentheses' => true,
//        'no_unused_imports' => true,
//        'no_useless_else' => true,
//        'no_useless_return' => true,
//        'no_whitespace_before_comma_in_array' => true,
//        'no_whitespace_in_blank_line' => true,
//        'normalize_index_brace' => true,
//        'object_operator_without_whitespace' => true,
//        'ordered_imports' => ['sort_algorithm' => 'length'],
//        'php_unit_fqcn_annotation' => true,
//        'phpdoc_align' => ['align' => 'vertical'],
//        'phpdoc_indent' => true,
//        'phpdoc_inline_tag' => true,
//        'phpdoc_no_access' => true,
//        'phpdoc_no_package' => true,
//        'phpdoc_no_useless_inheritdoc' => true,
//        'phpdoc_order' => true,
//        'phpdoc_scalar' => true,
//        'phpdoc_separation' => true,
//        'phpdoc_single_line_var_spacing' => true,
//        'phpdoc_summary' => true,
//        'phpdoc_to_comment' => true,
//        'phpdoc_trim' => true,
//        'phpdoc_types' => true,
//        'phpdoc_var_without_name' => true,
//        'psr4' => true,
//        'self_accessor' => true,
//        'short_scalar_cast' => true,
//        'simplified_null_return' => true,
//        'single_blank_line_at_eof' => true,
//        'single_blank_line_before_namespace' => true,
//        'single_class_element_per_statement' => true,
//        'single_import_per_statement' => true,
//        'single_line_after_imports' => true,
//        'single_quote' => true,
//        'space_after_semicolon' => true,
//        'standardize_not_equals' => true,
//        'switch_case_semicolon_to_colon' => true,
//        'switch_case_space' => true,
//        'ternary_operator_spaces' => true,
//        'trailing_comma_in_multiline_array' => true,
//        'trim_array_spaces' => true,
//        'unary_operator_spaces' => false,
//        'visibility_required' => true,
//        'whitespace_after_comma_in_array' => true,
//    ])
    ->setLineEnding("\n")
    ->setFinder($finder);
```

Now make sure that you have _Format on save_ enabled in vscode and start formatting your code on the fly - awesome! 🤯