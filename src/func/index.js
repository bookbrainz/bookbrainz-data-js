/*
 * Copyright (C) 2018 Ben Ockmore
 * Copyright (C) 2018 Shivam Tripathi
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */


import * as alias from './alias';
import * as disambiguation from './disambiguation';
import * as entity from './entity';
import * as identifier from './identifier';
import * as relationship from './relationship';
import * as set from './set';


export default function init() {
	return {
		alias,
		disambiguation,
		entity,
		identifier,
		relationship,
		set
	};
}
