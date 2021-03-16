/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/language-service/ivy/adapters" />
/** @fileoverview provides adapters for communicating with the ng compiler */
import { ConfigurationHost } from '@angular/compiler-cli';
import { NgCompilerAdapter } from '@angular/compiler-cli/src/ngtsc/core/api';
import { AbsoluteFsPath, FileStats, PathSegment, PathString } from '@angular/compiler-cli/src/ngtsc/file_system';
import * as ts from 'typescript/lib/tsserverlibrary';
export declare class LanguageServiceAdapter implements NgCompilerAdapter {
    private readonly project;
    readonly entryPoint: null;
    readonly constructionDiagnostics: ts.Diagnostic[];
    readonly ignoreForEmit: Set<ts.SourceFile>;
    readonly factoryTracker: null;
    readonly unifiedModulesHost: null;
    readonly rootDirs: AbsoluteFsPath[];
    /**
     * Map of resource filenames to the version of the file last read via `readResource`.
     *
     * Used to implement `getModifiedResourceFiles`.
     */
    private readonly lastReadResourceVersion;
    constructor(project: ts.server.Project);
    isShim(sf: ts.SourceFile): boolean;
    fileExists(fileName: string): boolean;
    readFile(fileName: string): string | undefined;
    getCurrentDirectory(): string;
    getCanonicalFileName(fileName: string): string;
    /**
     * Return the real path of a symlink. This method is required in order to
     * resolve symlinks in node_modules.
     */
    realpath(path: string): string;
    /**
     * readResource() is an Angular-specific method for reading files that are not
     * managed by the TS compiler host, namely templates and stylesheets.
     * It is a method on ExtendedTsCompilerHost, see
     * packages/compiler-cli/src/ngtsc/core/api/src/interfaces.ts
     */
    readResource(fileName: string): string;
    getModifiedResourceFiles(): Set<string> | undefined;
}
/**
 * Used to read configuration files.
 *
 * A language service parse configuration host is independent of the adapter
 * because signatures of calls like `FileSystem#readFile` are a bit stricter
 * than those on the adapter.
 */
export declare class LSParseConfigHost implements ConfigurationHost {
    private readonly serverHost;
    constructor(serverHost: ts.server.ServerHost);
    exists(path: AbsoluteFsPath): boolean;
    readFile(path: AbsoluteFsPath): string;
    lstat(path: AbsoluteFsPath): FileStats;
    pwd(): AbsoluteFsPath;
    extname(path: AbsoluteFsPath | PathSegment): string;
    resolve(...paths: string[]): AbsoluteFsPath;
    dirname<T extends PathString>(file: T): T;
    join<T extends PathString>(basePath: T, ...paths: string[]): T;
}
