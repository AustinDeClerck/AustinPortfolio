export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red', 'Frameworks', false);
    static readonly REACT = new Tag('React', 'blue', 'Frameworks', false);
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred', 'Languages', false);
    static readonly PYTHON = new Tag('Python', 'pink', 'Languages', false);
    static readonly CSHARP = new Tag('C#', 'green', 'Languages', false);
    static readonly JAVA = new Tag('Java', 'orange', 'Languages', false);
    static readonly NODEJS = new Tag('Node.JS', 'brown', 'Frameworks', false);
    static readonly JAVASCRIPT = new Tag('JavaScript', 'orange', 'Languages', false);
    static readonly ASPNET = new Tag('ASP.NET', 'purple', 'Frameworks', false);

    public constructor(public readonly key: string, public readonly color: string, public readonly category: string, public filtering: boolean) {

    }

    static GetTags() {
        return [
            Tag.ANGULAR,
            Tag.REACT,
            Tag.TYPESCRIPT,
            Tag.PYTHON,
            Tag.CSHARP,
            Tag.JAVA,
            Tag.JAVASCRIPT,
            Tag.NODEJS,
            Tag.ASPNET,
        ];
    }

    toString() {
        return this.key;
    }
}
