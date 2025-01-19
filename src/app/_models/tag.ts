export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red', 'Frameworks', false);
    static readonly REACT = new Tag('React', '#3fcbea', 'Frameworks', false);
    static readonly TYPESCRIPT = new Tag('TypeScript', '#3178C6', 'Languages', false);
    static readonly PYTHON = new Tag('Python', '#f2bd00', 'Languages', false);
    static readonly CSHARP = new Tag('C#', '#8a2be2', 'Languages', false);
    static readonly NODEJS = new Tag('Node.JS', '#3A8639', 'Frameworks', false);
    static readonly JAVASCRIPT = new Tag('JavaScript', '#EC0784', 'Languages', false);
    static readonly RUBY = new Tag('Ruby', 'darkred', 'Languages', false);
    static readonly REDUX = new Tag('Redux', 'orange', 'Frameworks', false);

    public constructor(public readonly key: string, public readonly color: string, public readonly category: string, public filtering: boolean) {

    }

    static GetTags() {
        return [
            Tag.ANGULAR,
            Tag.REACT,
            Tag.TYPESCRIPT,
            Tag.PYTHON,
            Tag.CSHARP,
            Tag.JAVASCRIPT,
            Tag.NODEJS,
            Tag.RUBY
        ];
    }

    toString() {
        return this.key;
    }
}
