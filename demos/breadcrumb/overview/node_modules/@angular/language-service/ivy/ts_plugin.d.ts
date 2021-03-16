/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/language-service/ivy/ts_plugin" />
import * as ts from 'typescript/lib/tsserverlibrary';
import { NgLanguageService } from '../api';
export declare function create(info: ts.server.PluginCreateInfo): NgLanguageService;
export declare function getExternalFiles(project: ts.server.Project): string[];
