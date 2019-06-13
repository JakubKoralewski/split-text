interface SplitTextOptions {
	words?: number;
	chars?: number;
	spacing?: number | string;
}

interface NodeWithText extends Node {
	nodeText?: Text;
	chars?: Node[];
}

export interface SplitTextSplit {
	words: Node[];
	chars: Node[];
}

/** Found here: https://codepen.io/animatedcreativity/pen/wqrPWj?editors=1010
 *
 *  TypeScript migration by me.
 *  Fixed problem where whitespace (like tabs in HTML) would be added as well.
 *  @author: Animated Creativity
 */
export class SplitText {
	options: SplitTextOptions;
	constructor(options: SplitTextOptions) {
		if (!options.hasOwnProperty("words")) {
			options.words = 1;
		}
		if (!options.hasOwnProperty("chars")) {
			options.chars = 1;
		}
		if (!options.hasOwnProperty("spacing")) {
			options.spacing = 5;
		}
		this.options = options;
	}
	split(element: HTMLElement) {
		const textNodes = this.searchTextNodes(element);
		const splitText = this.splitTextNodes(textNodes);
		return splitText as SplitTextSplit;
	}
	searchTextNodes(element: HTMLElement) {
		let foundTextNodes: HTMLElement[] = [];
		if (element == null || element == undefined) {
			return foundTextNodes;
		}
		element.childNodes.forEach(node => {
			if (node.nodeName == "#text") {
				// text found
				foundTextNodes.push(node as HTMLElement);
			} else {
				foundTextNodes = foundTextNodes.concat(
					this.searchTextNodes(node as HTMLElement)
				);
			}
		});
		return foundTextNodes;
	}
	createElement(text: string, relatedNode: Node): Node {
		console.log(`Create element with text: '${text}'`);
		const node = document.createElement("div");
		const nodeText = document.createTextNode(text);
		(node as NodeWithText).nodeText = nodeText;
		node.appendChild(nodeText);
		node.style.display = "inline-block";
		node.style.position = "relative";
		if (text.trim() == "") {
			if (typeof this.options.spacing === "string") {
				node.style.width = this.options.spacing;
			} else if (typeof this.options.spacing === "number") {
				node.style.width = `${this.options.spacing} px`;
			} else {
				throw TypeError("Wrong options.spacing data type!");
			}
		}
		(relatedNode.parentNode as Node).insertBefore(node, relatedNode);
		return node;
	}
	splitCharacters(textNode: Text) {
		const characters = textNode.nodeValue as string;
		const chars: Node[] = [];
		if (characters.trim() != "") {
			for (let c = 0; c < characters.length; c++) {
				const character = characters.substr(c, 1);
				const char = this.createElement(character, textNode);
				if (character.trim() != "") {
					chars.push(char);
				}
			}
			(textNode.parentNode as Node).removeChild(textNode);
		}
		return chars;
	}
	splitWords(textNode: Node) {
		const textWords = (textNode.nodeValue as string).split(" ");
		const words: NodeWithText[] = [];
		for (let w = 0; w < textWords.length; w++) {
			const textWord = textWords[w];
			const word = this.createElement(textWord.trim(), textNode);
			if (textWord.trim() != "") {
				words.push(word);
			}
			if (w < textWords.length - 1) {
				this.createElement(" ", textNode);
			} // spacing for word
		}
		(textNode.parentNode as Node).removeChild(textNode);
		return words;
	}
	splitTextNodes(textNodes: Node[]) {
		const splitText: { words: NodeWithText[]; chars: Node[] } = {
			words: [],
			chars: []
		};
		textNodes.forEach(textNode => {
			if (this.options.words == 0) {
				splitText.chars = splitText.chars.concat(
					this.splitCharacters(textNode as Text)
				);
			} else {
				const words = this.splitWords(textNode);
				if (this.options.chars == 1) {
					for (let w = 0; w <= words.length - 1; w++) {
						const word = words[w];
						const chars = this.splitCharacters(
							word.nodeText as Text
						);
						splitText.chars = splitText.chars.concat(chars);
						word.chars = chars;
					}
				}
				splitText.words = splitText.words.concat(words);
			}
		});
		return splitText;
	}
}
