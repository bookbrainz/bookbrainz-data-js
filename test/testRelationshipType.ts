/*
 * Copyright (C) 2015  Ben Ockmore
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

// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import bookbrainzData from './bookshelf';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import {truncateTables} from '../src/util';


chai.use(chaiAsPromised);
const {expect} = chai;
const {RelationshipType, bookshelf} = bookbrainzData;
describe('RelationshipType model', () => {
	afterEach(() =>
		truncateTables(bookshelf, ['bookbrainz.relationship_type']));
	it('should return a JSON object with correct keys when saved', () => {
		const relTypeData = {
			description: 'description',
			label: 'test_type',
			linkPhrase: 'linkPhrase',
			reverseLinkPhrase: 'reverseLinkPhrase',
			sourceEntityType: 'Author',
			targetEntityType: 'Author'
		};
		const relTypeCreationPromise = new RelationshipType(relTypeData)
			.save()
			.then((model) => model.refresh())
			.then((relType) => relType.toJSON());
		return expect(relTypeCreationPromise).to.eventually.have.all.keys([
			'id',
			'label',
			'description',
			'linkPhrase',
			'reverseLinkPhrase',
			'sourceEntityType',
			'targetEntityType',
			'parentId',
			'childOrder',
			'deprecated'
		]);
	});
});
