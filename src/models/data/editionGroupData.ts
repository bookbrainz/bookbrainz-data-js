/*
 * Copyright (C) 2015-2016  Ben Ockmore
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
import {camelToSnake, snakeToCamel} from '../../util';


export default function editionGroupData(bookshelf) {
	const EditionGroupData = bookshelf.Model.extend({
		aliasSet() {
			return this.belongsTo('AliasSet', 'alias_set_id');
		},

		annotation() {
			return this.belongsTo('Annotation', 'annotation_id');
		},

		authorCredit() {
			return this.belongsTo('AuthorCredit', 'author_credit_id');
		},

		disambiguation() {
			return this.belongsTo('Disambiguation', 'disambiguation_id');
		},

		editionGroupType() {
			return this.belongsTo('EditionGroupType', 'type_id');
		},

		editions() {
			return this.hasMany('Edition', 'edition_group_bbid').query({
				where: {
					master: true
				}
			});
		},

		format: camelToSnake,
		idAttribute: 'id',

		identifierSet() {
			return this.belongsTo('IdentifierSet', 'identifier_set_id');
		},

		parse: snakeToCamel,

		relationshipSet() {
			return this.belongsTo('RelationshipSet', 'relationship_set_id');
		},

		tableName: 'bookbrainz.edition_group_data'
	});
	return bookshelf.model('EditionGroupData', EditionGroupData);
}
