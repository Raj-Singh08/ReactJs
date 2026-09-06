import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
    // --------------------------------------------------
    // Ignored files
    // --------------------------------------------------
    globalIgnores([
        'dist',
        'build',
        'coverage',
        'node_modules',
    ]),

    // --------------------------------------------------
    // JavaScript / React
    // --------------------------------------------------
    {
        files: ['**/*.{js,jsx}'],

        extends: [
            js.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
            importPlugin.flatConfigs.recommended,
            jsxA11y.flatConfigs.recommended,
        ],

        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',

            globals: {
                ...globals.browser,
                ...globals.es2025,
            },

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        settings: {
            react: {
                version: 'detect',
            },

            'import/resolver': {
                node: true,
            },
        },

        rules: {
            // --------------------------------------------------
            // General JavaScript
            // --------------------------------------------------

            'no-console': 'warn',

            'no-debugger': 'error',

            'no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],

            'prefer-const': 'error',

            'no-var': 'error',

            'eqeqeq': ['error', 'always'],

            'no-duplicate-imports': 'error',

            // --------------------------------------------------
            // Imports
            // --------------------------------------------------

            'import/no-unresolved': 'error',

            'import/no-duplicates': 'error',

            'import/order': [
                'warn',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                    ],

                    'newlines-between': 'always',

                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],

            // --------------------------------------------------
            // React Hooks
            // --------------------------------------------------

            'react-hooks/rules-of-hooks': 'error',

            'react-hooks/exhaustive-deps': 'warn',

            // --------------------------------------------------
            // React Refresh
            // --------------------------------------------------

            'react-refresh/only-export-components': [
                'warn',
                {
                    allowConstantExport: true,
                },
            ],

            // --------------------------------------------------
            // Accessibility
            // --------------------------------------------------

            'jsx-a11y/anchor-is-valid': 'off',

            // --------------------------------------------------
            // Code quality
            // --------------------------------------------------

            'no-unreachable': 'error',

            'no-unreachable-loop': 'error',

            'no-self-assign': 'error',

            'no-self-compare': 'error',

            'no-useless-constructor': 'error',

            'no-useless-rename': 'error',
        },
    },

    // --------------------------------------------------
    // Test files
    // --------------------------------------------------
    {
        files: [
            '**/*.test.{js,jsx}',
            '**/*.spec.{js,jsx}',
        ],

        globals: {
            ...globals.browser,
            ...globals.node,
        },

        rules: {
            'no-console': 'off',
        },
    },
]);