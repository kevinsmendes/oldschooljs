import LootTable from '../../structures/LootTable';
import Clue from '../../structures/Clue';
import { ItemBank } from '../../meta/types';
import Loot from '../../structures/Loot';
import { rand } from '../../util/util';

export const RareTable = new LootTable()
	.add('Black 2h sword')
	.add('Black platebody')
	.add('Black longsword')
	.add('Black full helm')
	.add('Black platelegs')
	.add('Black battleaxe')
	.add('Black axe')
	.add('Black pickaxe')
	.add('Black plateskirt')
	.add('Black kiteshield')
	.add('Black med helm')
	.add('Black dagger')
	.add('Black sq shield')
	.add('Black chainbody')
	.add('Black sword')
	.add('Black mace')
	.add('Black warhammer')
	.add('Black scimitar');

export const SuccessfulUniqueTable = new LootTable()
	.add('Mole slippers')
	.add('Frog slippers')
	.add('Bear feet')
	.add('Demon feet')
	.add('Jester cape')
	.add('Shoulder parrot')
	.add("Monk's robe top (t)")
	.add("Monk's robe (t)")
	.add('Amulet of defence (t)')
	.add('Sandwich lady hat')
	.add('Sandwich lady top')
	.add('Sandwich lady bottom')
	.add('Rune scimitar ornament kit (guthix)')
	.add('Rune scimitar ornament kit (saradomin)')
	.add('Rune scimitar ornament kit (zamorak)');

export const UniqueTable = new LootTable().add('Cabbage').add(SuccessfulUniqueTable);

export const StandardTable = new LootTable()
	.add('Shrimps', [5, 14])
	.add('Herring', [5, 9])
	.add('Sardine', [5, 12])
	.add('Air rune', [15, 35])
	.add('Fire rune', [15, 35])
	.add('Water rune', [15, 35])
	.add('Earth rune', [15, 35])
	.add('Mind rune', [15, 35])
	.add('Body rune', [15, 35])
	.add('Law rune', [2, 7])
	.add('Chaos rune', [2, 7])
	.add('Nature rune', [2, 7])
	.add('Bronze arrow', [15, 30])
	.add('Iron arrow', [7, 15])
	.add('Staff of air')
	.add('Staff of water')
	.add('Staff of earth')
	.add('Staff of fire')
	.add('Steel platebody')
	.add('Steel longsword')
	.add('Steel full helm')
	.add('Steel platelegs')
	.add('Steel battleaxe')
	.add('Steel axe')
	.add('Iron pickaxe')
	.add('Steel dagger')
	.add('Oak shortbow')
	.add('Longbow')
	.add('Oak longbow')
	.add('Leather chaps')
	.add('Leather body')
	.add('Hardleather body')
	.add('Leather vambraces')
	.add('Leather cowl')
	.add('Blue wizard robe')
	.add('Blue wizard hat')
	.add('Black robe')
	.add('Wizard hat')
	.add('Steel plateskirt')
	.add('Shortbow')
	.add(RareTable);

export const BeginnerClueTable = new LootTable().add(StandardTable, 1, 11).add(UniqueTable, 1, 1);

export class BeginnerCasket extends Clue {
	public open(quantity = 1): ItemBank {
		const loot = new Loot();
		for (let i = 0; i < quantity; i++) {
			const numberOfRolls = rand(1, 3);

			for (let i = 0; i < numberOfRolls; i++) {
				loot.add(BeginnerClueTable.roll());
			}
		}
		return loot.values();
	}
}

export default new BeginnerCasket({ table: BeginnerClueTable });
