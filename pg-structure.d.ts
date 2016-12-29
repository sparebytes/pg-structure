/// <reference types="pg" />

import * as pg from 'pg';

declare namespace pgStructure {

    type relationType = {};
    type constraintType = {};

    /**
     * @description Constructor function. You don't need to call constructor manually. pg-structure handles this.
    * @param   {Object}    args    - Attributes of the {@link Column} instance to be created.
    * @returns {Column}            - {@link Column} instance.
    */
    class Column {
        /**
         * @description Constructor function. You don't need to call constructor manually. pg-structure handles this.
         * @param   {Object}    args    - Attributes of the {@link Column} instance to be created.
         * @returns {Column}            - {@link Column} instance.
         */
        constructor(args: Object);

        /**
         * @name Column#allowNull
         * @type {boolean}
         * @readonly
         * @description `true` if column is allowed to contain null values; otherwise `false`.
         * @see {@link Column#notNull notNull}.
         */
        allowNull: boolean;

        /**
         * @name Column#arrayDimension
         * @type {number}
         * @readonly
         * @description Number of dimensions, if the column is an array type; otherwise 0.
         */
        arrayDimension: number;

        /**
         * @name Column#arrayType
         * @type {string|null}
         * @readonly
         * @description If this column is an array, data type of the array. If column is not an array equals `null`.
         */
        arrayType: (string | null);

        /**
         * @name Column#comment
         * @type {string|null}
         * @readonly
         * @description Comment about column.
         * @see Aliases {@link Column#description description}
         */
        comment: (string | null);

        /**
         * @name Column#commentData
         * @type {Object}
         * @readonly
         * @description JS Object extracted from column description. Object is expected as JSON data between `[JSON]` and `[/JSON]`
         * tags in description. Tags are case-insensitive.
         * @see Aliases {@link Column#descriptionData descriptionData}
         * @example
         * let description = column.comment;            // -> 'This column holds name of account. [JSON]{ "extraData": 2 }[/PGEN]'
         * let extra = column.commentData;              // -> { extraData: 2 }
         * console.log(column.commentData.extraData);   // -> 2
         */
        commentData: Object;

        /**
         * @name Column#db
         * @type {DB}
         * @readonly
         * @description {@link DB} this table belongs to.
         */
        db: Db;

        /**
         * @name Column#default
         * @type {string|null}
         * @readonly
         * @description Default value of the column without typecast. Default values includes single quotes except sql functions and numeric values.
         * @see {@link Column#defaultWithTypeCast defaultWithTypeCast} for default values with typecast as returned by PostgreSQL
         * @example
         * var column = db('crm').schema('public').table('contact').column('name');
         * var type = column.default;           // "'George'"
         * type = age.default;                  // 20
         * type = created_at.default;           // "now()"
         * type = column.defaultWithTypeCast;   // "'George'::character varying"
         *
         */
        default: (string | null);

        /**
         * @name Column#defaultWithTypeCast
         * @type {string|null}
         * @readonly
         * @description Default expression of the column with typecast. PostgreSQL returns default values with typecast.
         * Default values includes single quotes except sql functions and numeric values. Also sql functions and numeric values
         * do not contain type cast.
         * @see {@link Column#default default} for accessing default values without typecast.
         * @example
         * var column = db('crm').schema('public').table('contact').column('name');
         * var type = column.defaultWithTypeCast;   // "'George'::character varying"
         * type = age.defaultWithTypeCast;          // 20
         * type = created_at.defaultWithTypeCast;   // "now()"
         * type = column.default;                   // "'George'"
         */
        defaultWithTypeCast: (string | null);

        /**
         * @name Column#description
         * @type {string|null}
         * @readonly
         * @description Comment about column.
         * @see Aliases {@link Column#comment comment}
         */
        description: (string | null);

        /**
         * @name Column#descriptionData
         * @type {Object}
         * @readonly
         * @description JS Object extracted from column description. Object is expected as JSON data between `[JSON]` and `[/JSON]`
         * tags in description. Tags are case-insensitive.
         * @see Aliases {@link Column#commentData commentData}
         * @example
         * let description = column.description;            // -> 'This column holds name of account. [JSON]{ "extraData": 2 }[/PGEN]'
         * let extra = column.descriptionData;              // -> { extraData: 2 }
         * console.log(column.descriptionData.extraData);   // -> 2
         */
        descriptionData: Object;

        /**
         * @name Column#domainName
         * @type {string|null}
         * @readonly
         * @description If column data type is a domain, this equals domain name without domain schema. Otherwise null.
         * @see {@link Column#domainFullName domainFullName} {@link Column#domainFullCatalogName domainFullCatalogName}.
         * @example
         * var domainName = column.domainName; // i.e. 'phone_number'
         */
        domainName: (string | null);

        /**
         * @name Column#domainFullName
         * @type {string|null}
         * @readonly
         * @description If column data type is a domain, this equals domain name including domain schema. Otherwise null.
         * @see {@link Column#domainName domainName}.
         * @example
         * var domainName = column.domainFullName; // i.e. 'public.phone_number'
         */
        domainFullName: (string | null);

        /**
         * @name Column#domainFullCatalogName
         * @type {string|null}
         * @readonly
         * @description If column data type is a domain, this equals domain name including domain schema. Otherwise null.
         * @see {@link Column#domainName domainName}.
         * @example
         * var domainName = column.domainFullName; // i.e. 'public.phone_number'
         */
        domainFullCatalogName: (string | null);

        /**
         * @name Column#domainSchema
         * @type {string|null}
         * @readonly
         * @description If column data type is a domain, this equals domain schema name. Otherwise null.
         * @see {@link Column#domainFullName domainFullName}.
         * @example
         * var domainName = column.domainSchema; // i.e. 'public'
         */
        domainSchema: (string | null);

        /**
         * @name Column#enumLabels
         * @type {Array<string>|null}
         * @readonly
         * @description Array of the textual labels for enum values column may contain. If column is not an enum, then this
         * equals `undefined`
         * @see Aliases {@link Column#enumValues enumValues}
         */
        enumLabels: (string[] | null);

        /**
         * @name Column#enumValues
         * @type {Array<string>|null}
         * @readonly
         * @description Array of the textual labels for enum values column may contain. If column is not an enum, then this
         * equals `undefined`
         * @see Aliases {@link Column#enumLabels enumLabels}
         */
        enumValues: (string[] | null);

        /**
         * @name Column#foreignKeyConstraints
         * @type {Map<string, Constraint>}
         * @readonly
         * @description {@link Map} of foreign key constraints of the column, if column is part of one or more foreign key constraint.
         */
        foreignKeyConstraints: Map<string, Constraint>;

        /**
         * @name Column#fullName
         * @type {string}
         * @readonly
         * @description Full name of the {@link Column} with (.) notation.
         * @example
         * var fullName = column.fullName; // public.account.id
         */
        fullName: string;

        /**
         * @name Column#fullCatalogName
         * @type {string}
         * @readonly
         * @description Full name of the {@link Column} with (.) notation including catalog name.
         * @example
         * var fullName = table.fullCatalogName; // crm.public.account.id
         */
        fullCatalogName: string;

        /**
         * @name Column#indexes
         * @type {Map<string, Index>}
         * @readonly
         * @description {@link Map} of {@link Index indexes}, which column is part of.
         */
        indexes: Map<string, Index>;

        /**
         * @name Column#isAutoIncrement
         * @type {boolean}
         * @readonly
         * @description `true` if this column has an auto incremented (`nextval()`) default value or defined one of `serial`
         * types.
         * @see Aliases {@link Column#isSerial isSerial}
         */
        isAutoIncrement: boolean;

        /**
         * @name Column#isSerial
         * @type {boolean}
         * @readonly
         * @description `true` if this column has an auto incremented (`nextval()`) default value or defined one of `serial`
         * types.
         * @see Aliases {@link Column#isAutoIncrement isAutoIncrement}
         */
        isSerial: boolean;

        /**
         * @name Column#isForeignKey
         * @type {boolean}
         * @readonly
         * @description `true` if this column is a foreign key or part of a foreign key constraint; otherwise `false`.
         * Please note that a foreign key may contain more than one column.
         */
        isForeignKey: boolean;

        /**
         * @name Column#isPrimaryKey
         * @type {boolean}
         * @readonly
         * @description `true` if this column is a primary key or part of a primary key constraint; otherwise `false`.
         * Please note that a primary key may contain more than one column.
         */
        isPrimaryKey: boolean;

        /**
         * @name Column#length
         * @type {number|null}
         * @readonly
         * @description Length of the column.
         * * For data type identified as a character or bit string type, this is the declared
         * maximum length. If column is an array, same rule applies data type of the array.
         * * For character arrays or bit string type arrays, this is the declared maximum length of the array's data type.
         * * For arrays atttypmod records type-specific data supplied at table creation time (for example, the maximum length
         * of a varchar column). It is passed to type-specific input functions and length coercion functions.
         * * This value is `undefined` for all other data types or if no maximum length was declared.
         */
        length: (number | null);

        /**
         * @name Column#name
         * @type {string}
         * @readonly
         * @description Name of the column.
         */
        name: string;

        /**
         * @name Column#notNull
         * @type {boolean}
         * @readonly
         * @description `true` if column is **not allowed** to contain null values; otherwise `false`.
         * @see {@link Column#allowNull allowNull}
         */
        notNull: boolean;

        /**
         * @name Column#parent
         * @type {Table}
         * @readonly
         * @description {@link Table} this column belongs to.
         * @see Aliases {@link Column#table table}
         * @example
         * var table = column.parent; // Table instance
         */
        parent: Table;

        /**
         * @name Column#precision
         * @type {number|null}
         * @readonly
         * @description * If data type identifies a numeric type, this contains the (declared or implicit) precision of
         * the type for this column. The precision indicates the number of significant digits.
         * * If data type identifies a date, time, timestamp, or interval type, this column contains the (declared or implicit)
         * fractional seconds precision of the type for this attribute, that is, the number of decimal digits maintained
         * following the decimal point in the seconds value.
         * * If data type is an array. Same rules apply for the data type of the array, and this value would become precision
         * of the data type of the array.
         * * For all other data types, this is `undefined`.
         */
        precision: (number | null);

        /**
         * @name Column#referencedColumns
         * @type {Set<Column>}
         * @readonly
         * @description All referenced columns in all foreign key constraints by this column.
         */
        referencedColumns: Set<Column>;

        /**
         * @name Column#scale
         * @type {number|null}
         * @readonly
         * @description * If data type identifies an exact numeric type, this contains the (declared or implicit) scale
         * of the type for this attribute. The scale indicates the number of significant digits to the right of the decimal point.
         * * If data type is an array. Same rule applies for the data type of the array, and this value would become scale
         * of the data type of the array.
         * * For all other data types, this is `undefined`.
         */
        scale: (number | null);

        /**
         * @name Column#schema
         * @type {Schema}
         * @readonly
         * @description {@link Schema} this column belongs to.
         */
        schema: Schema;

        /**
         * @name Column#type
         * @type {postgreSQLDataType}
         * @readonly
         * @description Data type of the column.
         * * For built-in types this is name of type.
         * * `ARRAY`, for arrays, and type of array can be found via {@link Column#arrayType arrayType}.
         * * `USER-DEFINED` for user defined types, and type of it can be found via {@link Column#userDefinedType userDefinedType}.
         * * For domain types this is not domain name, but underlying base type of that domain. Use {@link Column#domainName domainName} or {@link Column#domainFullName domainFullName}
         * @see {@link Column#userDefinedType userDefinedType}
         * @see {@link Column#domainName domainName} and {@link Column#domainFullName domainFullName}
         */
        type: postgreSQLDataType;

        /**
         * @name Column#table
         * @type {Table}
         * @readonly
         * @description {@link Table} this column belongs to.
         * @see Aliases {@link Column#parent parent}
         * @example
         * var table = column.table; // Table instance
         */
        table: Table;

        /**
         * @name Column#userDefinedType
         * @type {postgreSQLDataType|null}
         * @readonly
         * @description If type of column is user defined such as composite, enumerated, this is the data type of the underlying type.
         */
        userDefinedType: (postgreSQLDataType | null);

        /**
         * @name Column#uniqueIndexesNoPk
         * @type {Map<string, Index>}
         * @readonly
         * @description {@link Map} of unique {@link Index indexes}, which column is part of. Excludes primary key indexes. PostgreSQL already creates a unique index for unique
         * {@link Constraint constraints}. So there is no need to look for unique constraints which will result duplicates.
         * @see {@link Column#uniqueIndexes uniqueIndexes} for all unique indexes including primary key indexes.
         */
        uniqueIndexesNoPk: Map<string, Index>;

        /**
         * @name Column#uniqueIndexes
         * @type {Map<string, Index>}
         * @readonly
         * @description {@link Map} of unique {@link Index indexes}, which column is part of. PostgreSQL already creates a unique index for unique
         * {@link Constraint constraints}. So there is no need to look for unique constraints which will result duplicates.
         * @see {@link Column#uniqueIndexesNoPk uniqueIndexesNoPK} for unique indexes excluding primary key indexes.
         */
        uniqueIndexes: Map<string, Index>;

    }

    /**
     * Calculates and returns non typecast default value from default value with typecast.
     * Default values includes single quotes except sql functions and numeric values.
     * @returns {string}                        - Default value without typecast.
     * @private
     */
    function getDefault(): string;

    /**
     * Parses enum labels defined in PostgreSQL and returns as an array of string values. PostgreSQL returns enum values
     * as comma separated values between curly braces. If string contains a comma, it wraps string with double quotes.
     * This function considers this situation
     * @private
     * @param   {string}                values  - Enum values.
     * @returns {Array<string>|null}           - Enum labels as an array. If column is not an enum returns null.
     */
    function parseEnumValues(values: string): (string[] | null);

    /**
     * Class which represent a constraint. Provides attributes and methods for details of the constraint.
     *
     * #### Notes for Through Constraints <span id="notes"></span>
     * Through constraints are used for many to many relationships. Actually there isn't such a thing called
     * **many to many relationship** or **through constraint** in the database engine. They are concepts to describe
     * records which may be related more than one record on both sides. For example an invoice may contain more than product and
     * a product may related to more than one invoice. Those relationships are solved a so called many to many **join table**.
     *
     * Constraint class supports many to many relationships. Since those constraints are not present in database engine,
     * they are extracted by estimation/interpretation. Many non-join tables in a database could have more than one
     * foreign key constraints, and they may not meant to be join tables, but they have still through relationships .
     *
     * <span id="exampleSchema"></span>Below is a database schema as an example:
     * ```
     * size -------------------
     * id (PK)                |  ---------------------------< line_item >------------ cart
     * name                   |  |                            product_id (PFK)        id (PK)
     *                        |  |                            cart_id    (PFK)        name
     *                        ^  |
     * color -------------< product >------------- vendor
     * id (PK)              id        (PK)         id (PK)
     * name                 name                   name
     *                      color_id  (FK)
     *                      size_id   (FK)
     *                      vendor_id (FK)
     * ```
     * Below is the same schema as image:
     * ![Database Schema](../../images/schema-through.png)
     *
     * Product table has 3 foreign key constraints. It is obvious that product table is not meant to be a many to many join table.
     * However product could have been join table for `size & vendor`, `color & vendor` and `size & color`. As a result size,
     * color and vendor tables would have many to many `through constraints`.
     *
     */
    class Constraint {
        /**
         * Class which represent a constraint. Provides attributes and methods for details of the constraint.
         *
         * #### Notes for Through Constraints <span id="notes"></span>
         * Through constraints are used for many to many relationships. Actually there isn't such a thing called
         * **many to many relationship** or **through constraint** in the database engine. They are concepts to describe
         * records which may be related more than one record on both sides. For example an invoice may contain more than product and
         * a product may related to more than one invoice. Those relationships are solved a so called many to many **join table**.
         *
         * Constraint class supports many to many relationships. Since those constraints are not present in database engine,
         * they are extracted by estimation/interpretation. Many non-join tables in a database could have more than one
         * foreign key constraints, and they may not meant to be join tables, but they have still through relationships .
         *
         * <span id="exampleSchema"></span>Below is a database schema as an example:
         * ```
         * size -------------------
         * id (PK)                |  ---------------------------< line_item >------------ cart
         * name                   |  |                            product_id (PFK)        id (PK)
         *                        |  |                            cart_id    (PFK)        name
         *                        ^  |
         * color -------------< product >------------- vendor
         * id (PK)              id        (PK)         id (PK)
         * name                 name                   name
         *                      color_id  (FK)
         *                      size_id   (FK)
         *                      vendor_id (FK)
         * ```
         * Below is the same schema as image:
         * ![Database Schema](../../images/schema-through.png)
         *
         * Product table has 3 foreign key constraints. It is obvious that product table is not meant to be a many to many join table.
         * However product could have been join table for `size & vendor`, `color & vendor` and `size & color`. As a result size,
         * color and vendor tables would have many to many `through constraints`.
         *
         */
        constructor(args: { parent: Table, table: Table, schemaName: string, name: string, type: string, description: string, descriptionData: Object, onUpdate: string, onDelete: string, matchOption: string });

        /**
         * @name Constraint#name
         * @type {string}
         * @readonly
         * @description Name of the constraint.
         */
        name: string;

        /**
         * @name Constraint#fullName
         * @type {string}
         * @readonly
         * @description Full name of the {@link Constraint constraint} with (.) notation.
         * @example
         * var fullName = constraint.fullName; // crm.public
         */
        fullName: string;

        /**
         * @name Constraint#fullCatalogName
         * @type {string}
         * @readonly
         * @description Full name of the {@link Constraint constraint} with (.) notation including catalog name.
         * @example
         * var fullCatalogName = constraint.fullCatalogName; // crm.public
         */
        fullCatalogName: string;

        /**
         * @name Constraint#type
         * @type {contsraintType}
         * @readonly
         * @description Constraint type. One of `PRIMARY KEY`, `FOREIGN KEY` or `CHECK`
         */
        type: constraintType;

        /**
         * @name Constraint#comment
         * @type {string}
         * @readonly
         * @description Comment of the Constraint.
         * @see Aliases {@link Constraint#description description}
         */
        comment: string;

        /**
         * @name Constraint#commentData
         * @type {Object}
         * @readonly
         * @description JS Object extracted from constraint description. Object is expected as JSON data between `[JSON]` and `[/JSON]`
         * tags in description. Tags are case-insensitive.
         * @see Aliases {@link Constraint#descriptionData descriptionData}
         * @example
         * let description = constraint.comment;            // -> 'This contraint refers contacts. [JSON]{ "extraData": 2 }[/PGEN]'
         * let extra = constraint.commentData;              // -> { extraData: 2 }
         * console.log(constraint.commentData.extraData);   // -> 2
         */
        commentData: Object;

        /**
         * @name Constraint#description
         * @type {string}
         * @readonly
         * @description Comment of the Constraint.
         * @see Aliases {@link Constraint#comment comment}
         */
        description: string;

        /**
         * @name Constraint#descriptionData
         * @type {Object}
         * @readonly
         * @description JS Object extracted from constraint description. Object is expected as JSON data between `[JSON]` and `[/JSON]`
         * tags in description. Tags are case-insensitive.
         * @see Aliases {@link Constraint#commentData commentData}
         * @example
         * let description = constraint.description;            // -> 'This contraint refers contacts. [JSON]{ "extraData": 2 }[/PGEN]'
         * let extra = constraint.descriptionData;              // -> { extraData: 2 }
         * console.log(constraint.descriptionData.extraData);   // -> 2
         */
        descriptionData: Object;

        /**
         * @name Constraint#child
         * @type {Table}
         * @readonly
         * @description Child {@link Table table} of this {@link Constraint constraint}.
         * **Note for foreign key constraints:** Child table is the table which contains foreign key.
         * In [example schema](#exampleSchema) product is a child table (vendor_id FK) of vendor table.
         * @example
         * var table = constraint.child;
         */
        child: Table;

        /**
         * @name Constraint#table
         * @type {Table}
         * @readonly
         * @description {@link Table} which this {@link Constraint constraint} belongs to or defined in. <br>
         * **Note for foreign key constraints:** As usual PostgreSQL defines foreign key constraints in child tables,
         * where foreign key column is defined, so this is child table for foreign key constraints.
         * @example
         * var table = constraint.table;
         */
        table: Table;

        /**
         * @name Constraint#db
         * @type {DB}
         * @readonly
         * @description {@link DB} this {@link Constraint constraint} belongs to.
         */
        db: Db;

        /**
         * @name Constraint#schema
         * @type {Schema}
         * @readonly
         * @description {@link Schema} this {@link Constraint constraint} belongs to.
         */
        schema: Schema;

        /**
         * @name Constraint#matchOption
         * @type {string}
         * @readonly
         * @description Match option of {@link Constraint}.
         */
        matchOption: string;

        /**
         * @name Constraint#onUpdate
         * @type {constraintRule|null}
         * @readonly
         * @description Update rule for foreign key {@link Constraint constraints}. One of `CASCADE`, `SET NULL`, `SET DEFAULT`, `RESTRICT`, `NO ACTION`
         * If this is not a foreign key {@link Constraint constraint} this is `null`.
         */
        onUpdate: (constraintRule | null);

        /**
         * @name Constraint#onDelete
         * @type {constraintRule|null}
         * @readonly
         * @description Update rule for foreign key {@link Constraint constraints}. One of `CASCADE`, `SET NULL`, `SET DEFAULT`, `RESTRICT`, `NO ACTION`
         * If this is not a foreign key {@link Constraint constraint} this is `null`.
         */
        onDelete: (constraintRule | null);

        /**
         * @name Constraint#referencedTable
         * @type {Table|null}
         * @readonly
         * @description For foreign key {@link Constraint constraints} this is {@link Table} instance this {@link Constraint constraint} refers to.
         * If this is not a foreign key {@link Constraint constraint} this is `null`.
         * @see Aliases {@link Constraint#parent parent}
         */
        referencedTable: (Table | null);

        /**
         * @name Constraint#parent
         * @type {Table|null}
         * @readonly
         * @description For foreign key {@link Constraint constraints} this is {@link Table} instance this {@link Constraint constraint} refers to.
         * If this is not a foreign key {@link Constraint constraint} this is `null`. <br>
         * **Please Note:** This is not the {@link Table} this constraint belongs to or defined in. Parent applies only to
         * foreign key constraints and for foreign key constraints parent means referenced table not the table it is defined in.
         * @see Aliases {@link Constraint#referencedTable referencedTable}
         * @see To get {@link Table} this constraint belongs to or defined in, use {@link Constraint#table table}.
         */
        parent: (Table | null);

        /**
         * @name Constraint#columns
         * @type {Map<string, Column>}
         * @readonly
         * @description For foreign key constraints, this is {@link Map map} of {@link Column columns} restricted by {@link Constraint constraint}, in order their ordinal position
         * within the constraint key.
         */
        columns: Map<string, Column>;

        /**
         * @name Constraint#referencedColumnsBy
         * @type {Map<string, Column>}
         * @readonly
         * @description For foreign key constraints, this is {@link Map map} of {@link Column columns} referenced by this constraint's columns.
         * Keys are referencing column's names, values are referenced columns.
         */
        referencedColumnsBy: Map<string, Column>;

    }

    /**
     * Class which represent a database. Provides attributes and methods for details of the database.
     */
    class Db {
        /**
         * Class which represent a database. Provides attributes and methods for details of the database.
         */
        constructor(args: { name: Object }, options: { cache: boolean });

        /**
         * @name Db#name
         * @type {string}
         * @readonly
         * @description Name of the {@link Database}.
         */
        name: string;

        /**
         * @name Db#fullName
         * @type {string}
         * @readonly
         * @description Full name of the {@link Database} with (.) notation. Since database does not have a parent this equals database name.
         */
        fullName: string;

        /**
         * @name Db#fullCatalogName
         * @type {string}
         * @readonly
         * @description Full name of the {@link Database} with (.) notation including catalog name. Since database does not have a parent this equals database name.
         */
        fullCatalogName: string;

        /**
         * @name Db#options
         * @type {Object}
         * @readonly
         * @description Options passed to during initialization.
         */
        options: Object;

        /**
         * @name Db#schemas
         * @type {Map<string, Schema>}
         * @readonly
         * @description All {@link Schema} instances in the database as a {@link Map}. Schemas are ordered by their name.
         * @see {@link Map}
         * @example
         * let isAvailable  = db.schemas.has('another_schema');
         * let schemaNames  = Array.from(db.schemas.keys());           // Use spread operator to get schema names as an array.
         * let public       = db.schemas.get('public');
         * let name         = public.name;
         *
         * for (let schema of db.schemas.values()) {
         *     console.log(schema.name);
         * }
         *
         * for (let [name, schema] of db.schemas) {
         *     console.log(name, schema.name);
         * }
         */
        schemas: Map<string, Schema>;

        /**
         * Returns {@link Schema}, {@link Table} or {@link Column} on given path relative to {@link Db}. Path should be in dot (.) notation.
         * @method Db#get
         * @param   {string}                        path    - Path of the requested item in dot (.) notation such as 'public.contact'
         * @returns {Schema|Table|Column|undefined}         - Requested item.
         * @example
         * var schema = db.get('public'),              // Returns public schema.
         *     table  = db.get('public.contact'),      // Returns contact table in public schema.
         *     column = db.get('public.contact.name'); // Returns name column of the contact table in public schema.
         */
        get(path: string): (Schema | Table | Column | undefined);

    }

    /**
     * Class which represent a database index. Provides attributes and methods for details of the index.
     */
    class Index {
        /**
         * Class which represent a database index. Provides attributes and methods for details of the index.
         */
        constructor(args: { name: string, isUnique: string, isPrimaryKey: string, parent: Table });

        /**
         * @name Index#name
         * @type {string}
         * @readonly
         * @description Name of the index.
         */
        name: string;

        /**
         * @name Index#fullName
         * @type {string}
         * @readonly
         * @description Full name of the {@link Index index} with (.) notation.
         * @example
         * var fullName = index.fullName; // crm.public
         */
        fullName: string;

        /**
         * @name Index#fullCatalogName
         * @type {string}
         * @readonly
         * @description Full name of the {@link Index index} with (.) notation including catalog name.
         * @example
         * var fullCatalogName = index.fullCatalogName; // crm.public
         */
        fullCatalogName: string;

        /**
         * @name Index#isUnique
         * @type {boolean}
         * @readonly
         * @description If true, this is a unique index.
         */
        isUnique: boolean;

        /**
         * @name Index#isPrimaryKey
         * @type {boolean}
         * @readonly
         * @description If true, this index represents the primary key of the table ({@link Index#isUnique isUnique} is always true for primary keys.)
         */
        isPrimaryKey: boolean;

        /**
         * @name Index#table
         * @type {Table}
         * @readonly
         * @description {@link Table} which this {@link Index index} belongs to.
         */
        table: Table;

        /**
         * @name Index#parent
         * @type {Table}
         * @readonly
         * @description {@link Table} which this {@link Index index} belongs to.
         */
        parent: Table;

        /**
         * @name Index#db
         * @type {DB}
         * @readonly
         * @description {@link DB} this {@link Index index} belongs to.
         */
        db: Db;

        /**
         * @name Index#schema
         * @type {Schema}
         * @readonly
         * @description {@link Schema} this {@link Index index} belongs to.
         */
        schema: Schema;

        /**
         * @name Index#columns
         * @type {Array<Column>}
         * @readonly
         * @description List of {@link Column columns} restricted by {@link Index index}, in order their ordinal position
         * within the index key. If {@link Index index} does not have any {@link Column columns} this is `null`.
         */
        columns: Column[];

        /**
         * @name Index#columnsByName
         * @type {Object.<string,Column>}
         * @readonly
         * @description List of columns restricted by {@link Index index}, in order their ordinal position within the index key.
         * If {@link Index index} does not have any columns this is `null`.
         */
        columnsByName: { [k: string]: Column };

    }

    /**
     * @description
     * Class which represent a many to many relationship which resembles `belongsToMany` or `hasManyThrough` relations in ORMs (Object Relational Mappers).
     * Provides attributes and methods for details of the relationship.
     *
     * Actually there isn't such a thing called **many to many relationship** or **through constraint** in the database engine.
     * They are concepts to describe records which may be related more than one record on both sides.
     * For example an invoice may contain more than product and a product may related to more than one invoice.
     * Those relationships are solved a so called many to many **join table**.
     *
     * Since those relations are not present in database engine, they are extracted by estimation/interpretation.
     * Many non-join tables in a database could have more than one foreign key constraints,
     * and they may not meant to be join tables, but they still appear to have through relationships.
     *
     * <span id="exampleSchema"></span>Below is a database schema as an example:
     * ```
     * size -------------------
     * id (PK)                |  ---------------------------< line_item >------------ cart
     * name                   |  |                            product_id (PFK)        id (PK)
     *                        |  |                            cart_id    (PFK)        name
     *                        ^  |
     * color -------------< product >------------- vendor
     * id (PK)              id        (PK)         id (PK)
     * name                 name                   name
     *                      color_id  (FK)
     *                      size_id   (FK)
     *                      vendor_id (FK)
     *
     * ```
     * Below is the same schema as image:
     * ![Database Schema](../../images/schema-through.png)
     *
     * Some definitions used in descriptions for {@link M2MRelation}.
     * * ** Source Table: ** Table which this relationship belongs to.
     * * ** Join Table: ** Table that contains common fields from two or more other tables.
     * * ** Target Table: ** Table that is related to base table through a join table.
     * <br><br>
     * Product table has 3 foreign key constraints. Product table is not meant to be a many to many join table.
     * However product could have been join table for `size & vendor`, `color & vendor` and `size & color`. As a result size,
     * color and vendor tables would have many to many relationships.
     * @example
     * // Example tables have single primary key and and examples first relation. So zero index ([0]) is used. Use all array elements if necessary.
     * // product ----< line_item >---- cart
     * // (source)        (join)       (target)
     *
     * let relation             = product.m2mRelations[0];              // RELATION:    product ---< line_item >--- cart
     * let sourceConstraint     = relation.sourceConstraint;            // CONSTRAINT:           ^-- product_has_carts
     * let targetConstraint     = relation.targetConstraint;            // CONSTRAINT:       cart_has_products --^
     * let sourceTable          = relation.sourceTable;                 // TABLE:       product
     * let targetTable          = relation.targetTable;                 // TABLE:       cart
     * let sourceJoinFKColumn   = relation.sourceConstraint.columns[0]; // COLUMN:      product_id  (from line_item table)
     * let targetJoinFKColumn   = relation.targetConstraint.columns[0]; // COLUMN:      cart_id     (from line_item table)
     * let sourcePKColumn       = relation.sourceTable.primaryKeys[0];  // COLUMN:      id          (from product table)
     * let targetPKColumn       = relation.targetTable.primaryKeys[0];  // COLUMN:      id          (from cart table)
     */
    class M2MRelation {
        /**
         * @description
         * Class which represent a many to many relationship which resembles `belongsToMany` or `hasManyThrough` relations in ORMs (Object Relational Mappers).
         * Provides attributes and methods for details of the relationship.
         *
         * Actually there isn't such a thing called **many to many relationship** or **through constraint** in the database engine.
         * They are concepts to describe records which may be related more than one record on both sides.
         * For example an invoice may contain more than product and a product may related to more than one invoice.
         * Those relationships are solved a so called many to many **join table**.
         *
         * Since those relations are not present in database engine, they are extracted by estimation/interpretation.
         * Many non-join tables in a database could have more than one foreign key constraints,
         * and they may not meant to be join tables, but they still appear to have through relationships.
         *
         * <span id="exampleSchema"></span>Below is a database schema as an example:
         * ```
         * size -------------------
         * id (PK)                |  ---------------------------< line_item >------------ cart
         * name                   |  |                            product_id (PFK)        id (PK)
         *                        |  |                            cart_id    (PFK)        name
         *                        ^  |
         * color -------------< product >------------- vendor
         * id (PK)              id        (PK)         id (PK)
         * name                 name                   name
         *                      color_id  (FK)
         *                      size_id   (FK)
         *                      vendor_id (FK)
         *
         * ```
         * Below is the same schema as image:
         * ![Database Schema](../../images/schema-through.png)
         *
         * Some definitions used in descriptions for {@link M2MRelation}.
         * * ** Source Table: ** Table which this relationship belongs to.
         * * ** Join Table: ** Table that contains common fields from two or more other tables.
         * * ** Target Table: ** Table that is related to base table through a join table.
         * <br><br>
         * Product table has 3 foreign key constraints. Product table is not meant to be a many to many join table.
         * However product could have been join table for `size & vendor`, `color & vendor` and `size & color`. As a result size,
         * color and vendor tables would have many to many relationships.
         * @example
         * // Example tables have single primary key and and examples first relation. So zero index ([0]) is used. Use all array elements if necessary.
         * // product ----< line_item >---- cart
         * // (source)        (join)       (target)
         *
         * let relation             = product.m2mRelations[0];              // RELATION:    product ---< line_item >--- cart
         * let sourceConstraint     = relation.sourceConstraint;            // CONSTRAINT:           ^-- product_has_carts
         * let targetConstraint     = relation.targetConstraint;            // CONSTRAINT:       cart_has_products --^
         * let sourceTable          = relation.sourceTable;                 // TABLE:       product
         * let targetTable          = relation.targetTable;                 // TABLE:       cart
         * let sourceJoinFKColumn   = relation.sourceConstraint.columns[0]; // COLUMN:      product_id  (from line_item table)
         * let targetJoinFKColumn   = relation.targetConstraint.columns[0]; // COLUMN:      cart_id     (from line_item table)
         * let sourcePKColumn       = relation.sourceTable.primaryKeys[0];  // COLUMN:      id          (from product table)
         * let targetPKColumn       = relation.targetTable.primaryKeys[0];  // COLUMN:      id          (from cart table)
         */
        constructor(args: { sourceTable: Table, joinTable: Table, targetTable: Table, sourceConstraint: Constraint, targetConstraint: Constraint });

        /**
         * @description (! EXPERIMENTAL) Returns name for relation using given strategy. Please see [Relation Names](../relation-names.md) for details.
         * @param   {string} [strategy] - (simple, complex) Naming strategy to use.
         * @return  {string}            - Relation name.
         * @see {@link ../relation-names.md Relation Names}
         */
        generateName(strategy?: string): string;

        /**
         * @name M2MRelation#type
         * @type {relationType}
         * @readonly
         * @description Type of relation which is `MANY TO MANY`.
         */
        type: relationType;

        /**
         * @name M2MRelation#sourceTable
         * @type {Table}
         * @readonly
         * @description {@link Table} which this relation belongs to.
         * @example
         * let relation = product.M2MRelationRelations[0];  // RELATION:    product ---< line_item >--- cart
         * let source   = relation.sourceTable;             // TABLE:       product
         */
        sourceTable: Table;

        /**
         * @name M2MRelation#joinTable
         * @type {Table}
         * @readonly
         * @description Join {@link Table} of this relationship. This table contains foreign key columns referring both
         * {@link M2MRelation#sourceTable sourceTable} and {@link M2MRelation#targetTable targetTable}.
         * @example
         * let relation  = product.M2MRelationRelations[0]; // RELATION:    product ---< line_item >--- cart
         * let joinTable = relation.joinTable;              // TABLE:       line_item
         */
        joinTable: Table;

        /**
         * @name M2MRelation#targetTable
         * @type {Table}
         * @readonly
         * @description {@link Table} which this relation is referring to (Through a join table).
         * @example
         * let relation = product.M2MRelationRelations[0];  // RELATION:    product ---< line_item >--- cart
         * let target   = relation.targetTable;             // TABLE:       cart
         */
        targetTable: Table;

        /**
         * @name M2MRelation#sourceConstraint
         * @type {Table}
         * @readonly
         * @description Foreign key {@link Constraint constraint} between {@link M2MRelation#sourceTable source table} and {@link M2MRelation#joinTable join table}.
         * @example
         * let relation             = product.M2MRelationRelations[0];      // RELATION:    product ---< line_item >--- cart
         * let sourceConstraint     = relation.sourceConstraint;            // CONSTRAINT:           ^-- product_has_carts
         * let sourceJoinFKColumn   = relation.sourceConstraint.columns[0]; // COLUMN:      product_id (from line_item table)
         */
        sourceConstraint: Table;

        /**
         * @name M2MRelation#targetConstraint
         * @type {Table}
         * @readonly
         * @description Foreign key {@link Constraint constraint} between {@link M2MRelation#joinTable join table} and {@link M2MRelation#targetTable target table}.
         * @example
         * let relation             = product.M2MRelationRelations[0];      // RELATION:    product ---< line_item >--- cart
         * let targetConstraint     = relation.targetConstraint;            // CONSTRAINT:       cart_has_products --^
         * let targetJoinFKColumn   = relation.targetConstraint.columns[0]; // COLUMN:      cart_id (from line_item table)
         */
        targetConstraint: Table;

    }

    /**
     * Generates a simple name for relation.
     * @private
     * @returns {string} - Simple name.
     */
    function getNameSimple(): string;

    /**
     * Generates a complex name for relation.
     * @private
     * @returns {string} - Complex name.
     */
    function getNameComplex(): string;

    /**
     * Returns relation name extracted from constraint name if constraint name is CSV (comma separated value). Name is
     * target table name prefixed with third element.
     * @private
     * @returns {string|undefined} - Second element of CSV constraint name.
     */
    function getNameFromConstraintName(): (string | undefined);

    /**
     * Returns relation name extracted from {@link Table#descriptionData} by looking keys `name.belongsToMany` or `name.m2m`.
     * Value from key is used as prefix and joined with target table name.
     * @private
     * @returns {string|undefined} - Name for relation
     */
    function getNameFromDescriptionData(): (string | undefined);

    /**
     * @description
     * Class which represent many to one relationship which resembles `belongsTo` relation in ORMs (Object Relational Mappers).
     * Provides attributes and methods for details of the relationship.
     *
     * Actually there is no many to one relation in database engine. It is basically one to many relation in reverse direction.
     *
     * <span id="exampleSchema"></span>Below is a database schema as an example:
     * ```
     * size -------------------
     * id (PK)                |  ---------------------------< line_item >------------ cart
     * name                   |  |                            product_id (PFK)        id (PK)
     *                        |  |                            cart_id    (PFK)        name
     *                        ^  |
     * color -------------< product >------------- vendor
     * id (PK)              id        (PK)         id (PK)
     * name                 name                   name
     *                      color_id  (FK)
     *                      size_id   (FK)
     *                      vendor_id (FK)
     *
     * ```
     * Below is the same schema as image:
     * ![Database Schema](../../images/schema-through.png)
     *
     * Some definitions used in descriptions for {@link M2ORelation}.
     * * ** Source Table: ** Table which this relationship belongs to.
     * * ** Target Table: ** Table that is related to base table.
     * @example
     * // Example tables have single primary key and examples first relation. So zero index ([0]) is used. Use all array elements if necessary.
     * // line_item >---- product
     * // (source)        (target)
     *
     * let relation     = line_item.m2oRelations[0];            // RELATION:    line_item >---- product
     * let constraint   = relation.constraint;                  // CONSTRAINT:               ^-- product_has_carts
     * let sourceTable  = relation.sourceTable;                 // TABLE:       line_item
     * let targetTable  = relation.targetTable;                 // TABLE:       product
     * let FKColumn     = relation.constraint.columns[0];       // COLUMN:      product_id  (from line_item table)
     * let PKColumn     = relation.targetTable.primaryKeys[0];  // COLUMN:      id          (from product table)
     */
    class M2ORelation {
        /**
         * @description
         * Class which represent many to one relationship which resembles `belongsTo` relation in ORMs (Object Relational Mappers).
         * Provides attributes and methods for details of the relationship.
         *
         * Actually there is no many to one relation in database engine. It is basically one to many relation in reverse direction.
         *
         * <span id="exampleSchema"></span>Below is a database schema as an example:
         * ```
         * size -------------------
         * id (PK)                |  ---------------------------< line_item >------------ cart
         * name                   |  |                            product_id (PFK)        id (PK)
         *                        |  |                            cart_id    (PFK)        name
         *                        ^  |
         * color -------------< product >------------- vendor
         * id (PK)              id        (PK)         id (PK)
         * name                 name                   name
         *                      color_id  (FK)
         *                      size_id   (FK)
         *                      vendor_id (FK)
         *
         * ```
         * Below is the same schema as image:
         * ![Database Schema](../../images/schema-through.png)
         *
         * Some definitions used in descriptions for {@link M2ORelation}.
         * * ** Source Table: ** Table which this relationship belongs to.
         * * ** Target Table: ** Table that is related to base table.
         * @example
         * // Example tables have single primary key and examples first relation. So zero index ([0]) is used. Use all array elements if necessary.
         * // line_item >---- product
         * // (source)        (target)
         *
         * let relation     = line_item.m2oRelations[0];            // RELATION:    line_item >---- product
         * let constraint   = relation.constraint;                  // CONSTRAINT:               ^-- product_has_carts
         * let sourceTable  = relation.sourceTable;                 // TABLE:       line_item
         * let targetTable  = relation.targetTable;                 // TABLE:       product
         * let FKColumn     = relation.constraint.columns[0];       // COLUMN:      product_id  (from line_item table)
         * let PKColumn     = relation.targetTable.primaryKeys[0];  // COLUMN:      id          (from product table)
         */
        constructor(args: { sourceTable: Table, targetTable: Table, constraint: Constraint, namingStrategy: string });

        /**
         * @description (! EXPERIMENTAL) Returns name for relation using given strategy. Please see [Relation Names](../relation-names.md) for details.
         * @param   {string} [strategy] - (simple, complex) Naming strategy to use.
         * @returns {string}            - Relation name.
         * @see {@link ../relation-names.md Relation Names}
         */
        generateName(strategy?: string): string;

        /**
         * @name M2ORelation#type
         * @type {relationType}
         * @readonly
         * @description Type of relation which is `MANY TO ONE`.
         */
        type: relationType;

        /**
         * @name M2ORelation#sourceTable
         * @type {Table}
         * @readonly
         * @description {@link Table} which this relation belongs to.
         * @example
         * let relation     = product.M2ORelationRelations[0];  // RELATION:    line_item >---- product
         * let sourceTable  = relation.sourceTable;             // TABLE:       line_item
         */
        sourceTable: Table;

        /**
         * @name M2ORelation#targetTable
         * @type {Table}
         * @readonly
         * @description {@link Table} which this relation is referred by.
         * @example
         * let relation     = product.M2ORelationRelations[0];  // RELATION:    line_item >---- product
         * let targetTable  = relation.targetTable;             // TABLE:       product
         */
        targetTable: Table;

        /**
         * @name M2ORelation#constraint
         * @type {Table}
         * @readonly
         * @description Foreign key {@link Constraint constraint} between {@link M2ORelation#sourceTable source table} and {@link M2ORelation#targetTable target table}.
         * @example
         * let relation     = product.M2ORelationRelations[0];  // RELATION:    line_item >---- product
         * let constraint   = relation.constraint;              // CONSTRAINT:               ^-- product_has_carts
         * let FKColumn     = relation.constraint.columns[0];   // COLUMN:      product_id (from line_item table)
         */
        constraint: Table;

    }

    /**
     * @description
     * Class which represent one to many relationship which resembles `hasMany` relation in ORMs (Object Relational Mappers).
     * Provides attributes and methods for details of the relationship.
     *
     * <span id="exampleSchema"></span>Below is a database schema as an example:
     * ```
     * size -------------------
     * id (PK)                |  ---------------------------< line_item >------------ cart
     * name                   |  |                            product_id (PFK)        id (PK)
     *                        |  |                            cart_id    (PFK)        name
     *                        ^  |
     * color -------------< product >------------- vendor
     * id (PK)              id        (PK)         id (PK)
     * name                 name                   name
     *                      color_id  (FK)
     *                      size_id   (FK)
     *                      vendor_id (FK)
     *
     * ```
     * Below is the same schema as image:
     * ![Database Schema](../../images/schema-through.png)
     *
     * Some definitions used in descriptions for {@link O2MRelation}.
     * * ** Source Table: ** Table which this relationship belongs to.
     * * ** Target Table: ** Table that is related to base table.
     * @example
     * // Example tables have single primary key and examples first relation. So zero index ([0]) is used. Use all array elements if necessary.
     * // product ----< line_item
     * // (source)       (target)
     *
     * let relation         = product.o2mRelations[0];              // RELATION:    product ---< line_item
     * let constraint       = relation.constraint;                  // CONSTRAINT:           ^-- product_has_carts
     * let sourceTable      = relation.sourceTable;                 // TABLE:       product
     * let targetTable      = relation.targetTable;                 // TABLE:       line_item
     * let FKColumn         = relation.constraint.columns[0];       // COLUMN:      product_id  (from line_item table)
     * let sourcePKColumn   = relation.sourceTable.primaryKeys[0];  // COLUMN:      id          (from product table)
     */
    class O2MRelation {
        /**
         * @description
         * Class which represent one to many relationship which resembles `hasMany` relation in ORMs (Object Relational Mappers).
         * Provides attributes and methods for details of the relationship.
         *
         * <span id="exampleSchema"></span>Below is a database schema as an example:
         * ```
         * size -------------------
         * id (PK)                |  ---------------------------< line_item >------------ cart
         * name                   |  |                            product_id (PFK)        id (PK)
         *                        |  |                            cart_id    (PFK)        name
         *                        ^  |
         * color -------------< product >------------- vendor
         * id (PK)              id        (PK)         id (PK)
         * name                 name                   name
         *                      color_id  (FK)
         *                      size_id   (FK)
         *                      vendor_id (FK)
         *
         * ```
         * Below is the same schema as image:
         * ![Database Schema](../../images/schema-through.png)
         *
         * Some definitions used in descriptions for {@link O2MRelation}.
         * * ** Source Table: ** Table which this relationship belongs to.
         * * ** Target Table: ** Table that is related to base table.
         * @example
         * // Example tables have single primary key and examples first relation. So zero index ([0]) is used. Use all array elements if necessary.
         * // product ----< line_item
         * // (source)       (target)
         *
         * let relation         = product.o2mRelations[0];              // RELATION:    product ---< line_item
         * let constraint       = relation.constraint;                  // CONSTRAINT:           ^-- product_has_carts
         * let sourceTable      = relation.sourceTable;                 // TABLE:       product
         * let targetTable      = relation.targetTable;                 // TABLE:       line_item
         * let FKColumn         = relation.constraint.columns[0];       // COLUMN:      product_id  (from line_item table)
         * let sourcePKColumn   = relation.sourceTable.primaryKeys[0];  // COLUMN:      id          (from product table)
         */
        constructor(args: { sourceTable: Table, targetTable: Table, constraint: Constraint });

        /**
         * @description (! EXPERIMENTAL) Returns name for relation using given strategy. Please see [Relation Names](../relation-names.md) for details.
         * @param   {string}    [strategy]  - (simple, complex) Naming strategy to use.
         * @return  {string}                - Relation name.
         * @see {@link ../relation-names.md Relation Names}
         */
        generateName(strategy?: string): string;

        /**
         * @name O2MRelation#type
         * @type {relationType}
         * @readonly
         * @description Type of relation which is `ONE TO MANY`.
         */
        type: relationType;

        /**
         * @name O2MRelation#sourceTable
         * @type {Table}
         * @readonly
         * @description {@link Table} which this relation belongs to.
         * @example
         * let relation     = product.O2MRelationRelations[0];  // RELATION:    product ---< line_item
         * let sourceTable  = relation.sourceTable;             // TABLE:       product
         */
        sourceTable: Table;

        /**
         * @name O2MRelation#targetTable
         * @type {Table}
         * @readonly
         * @description {@link Table} which this relation is referring to.
         * @example
         * let relation     = product.O2MRelationRelations[0];  // RELATION:    product ---< line_item
         * let targetTable  = relation.targetTable;             // TABLE:       line_item
         */
        targetTable: Table;

        /**
         * @name O2MRelation#constraint
         * @type {Table}
         * @readonly
         * @description Foreign key {@link Constraint constraint} between {@link O2MRelation#sourceTable source table} and {@link O2MRelation#targetTable target table}.
         * @example
         * let relation     = product.O2MRelationRelations[0];  // RELATION:    product ---< line_item
         * let constraint   = relation.constraint;              // CONSTRAINT:           ^-- product_has_carts
         * let FKColumn     = relation.constraint.columns[0];   // COLUMN:      product_id (from line_item table)
         */
        constraint: Table;

    }


    /**
     * PostgreSQL connection options which are passed directly to node-postgres.
     * @typedef {Object} pgOptions
     * @property {string}           database            - Database name
     * @property {string}           [host=localhost]    - Hostname of the database.
     * @property {number}           [port=5432]         - Port of the database.
     * @property {string}           [user]              - Username for connecting to db.
     * @property {string}           [password]          - Password to connecting to db.
     * @property {boolean|Object}   [ssl=false]         - Pass the same options as tls.connect().
     */
    interface IpgOptions {
        database: string;
        host: string;
        port: number;
        user: string;
        password: string;
        ssl: (boolean | Object);
    }


    /**
     * Returns pg client. If given object is already pg client returns it directly, otherwise creates pg object
     * based on given options.
     * @param {Object|pg.Client} pgOptions  - Pg client or Connection parameters.
     * @returns {Promise<pg.Client>}       - Promise resolved with pg client as parameter.
     * @private
     */
    function getClient(pgOptions: (Object | pg.Client)): Promise<pg.Client>;

    /**
     * Executes given sql file and assign callback function an error events for the query.
     * @param {string}                      file            - SQL file
     * @param {pg.Client}                   client          - node-postgres client to query database.
     * @param {Array<string>}              schemas         - PostgreSQL schemas to be used in query.
     * @param {Function}                    eventCallback   - Callback to call on 'row' event.
     * @returns {Promise<void>}                            - Void promise
     * @private
     */
    function executeSqlFile(file: string, client: pg.Client, schemas: string[], eventCallback: (() => any)): Promise<void>;

    /**
     * Returns callback function which adds tables and columns returned from sql query to given DB object.
     * @param   {DB}                db      - pg-structure DB object.
     * @returns {Function}                  - Callback to call on 'row' event.
     * @private
     */
    function addTablesAndColumns(db: Db): (() => any);

    /**
     * Returns callback function which adds indexes returned from sql query to given DB object.
     * @param   {DB}                db      - pg-structure DB object.
     * @returns {Function}                  - Callback to call on 'row' event.
     * @private
     */
    function addIndexes(db: Db): (() => any);

    /**
     * Returns callback function which adds constraints returned from sql query to given DB object.
     * @param   {DB}                db      - pg-structure DB object.
     * @returns {Function}                  - Callback to call on 'row' event.
     * @private
     */
    function addConstraints(db: Db): (() => any);

    /**
     * Saves given database structure to a disk file. If given file name ends with `.zip` extension, file will be saved as
     * compressed zip file.
     * @param   {string|undefined}  file    - File path to save database structure.
     * @param   {DB}                db      - {@link DB} object to save.
     * @returns {Promise<string>}          - Serialized string.
     * @example
     * var pgStructure = require('pg-structure');
     *
     * pgStructure({database: 'db', user: 'user', password: 'password', host: 'localhost', port: 5432}, ['public', 'other_schema'])
     *     .then(db => pgStructure.save('./db.json', db))
     *     .catch(err => console.log(err.stack));
     */
    function save(file: (string | undefined), db: Db): Promise<string>;

    /**
     * Loads database structure from previously saved file. Much faster than getting structure from database.
     * If file is a zip file which contains a json file with same name as zip file, this function decompresses the file
     * automatically.<br/>
     * <img src="../../images/warning-24.png" style="margin-left: -26px;"> pgStructure cannot
     * load files saved by incompatible pg-structure module versions and returns `undefined`. In this case you should
     * fetch structure from database and create a new save file.
     * @param   {string}                    file    - File path to load db structure from.
     * @returns {Promise<DB|undefined>}            - {@link DB} instance or `undefined` if saved file is generated with incompatible module version.
     * @example
     * var pgStructure = require('pg-structure');
     *
     * pgStructure.load('./db.json')
     *     .then(db => console.log(db.schemas[0].name))
     *     .catch(err => console.log(err.stack));
     */
    function load(file: string): Promise<(Db | undefined)>;

    /**
     * Serializes database structure to make it possible to store or transfer.
     * @param   {DB}        db  - {@link DB} instance to serialize.
     * @returns {string}        - Serialized database structure.
     * @example
     * pgStructure({database: 'db', user: 'user', password: 'password', host: 'localhost', port: 5432}, ['public', 'other_schema'])
     *     .then(db => pgStructure.serialize(db))
     *     .then(data => console.log(data))
     *     .catch(err => console.log(err.stack));
     */
    function serialize(db: Db): string;

    /**
     * Alias of {@link module:pgStructure.serialize). Serializes database structure to make it possible to store or transfer.
     * @function
     * @param   {DB}        db  - {@link DB} instance to serialize.
     * @returns {string}        - Serialized database structure.
     * @see {@link module:pgStructure.serialize)
     */
    function toString(db: Db): string;

    /**
     * Creates and returns {@link DB} instance using previously serialized string. <br/>
     * <img src="../../images/warning-24.png" style="margin-left: -26px;"> pgStructure cannot
     * deserialize incompatible pg-structure module versions and returns `undefined`. In this case you should fetch structure from database.
     * @param   {string} serializedDBJSON   - Serialized database structure to create {@link DB} instance from.
     * @returns {DB|undefined}              - {@link DB} instance. If serialized string is from incompatible module version, this is `undefined`
     * var pgStructure = require('pg-structure');
     *
     * pgStructure.deserialize('./db.json')
     *     .then(db => console.log(db.schemas[0].name)
     *     .catch(err => console.log(err.stack));
     */
    function deserialize(serializedDBJSON: string): (Db | undefined);

    /**
     * Alias of {@link module:pgStructure.deserialize}. Creates and returns {@link DB} instance using previously serialized string. <br/>
     * <img src="../../images/warning-24.png" style="margin-left: -26px;"> pgStructure cannot
     * deserialize incompatible pg-structure module versions and returns `undefined`. In this case you should fetch structure from database.
     * @param   {string} serializedDB   - Serialized database structure to create {@link DB} instance from.
     * @returns {DB|undefined}          - {@link DB} instance. If serialized string is from incompatible module version, this is `undefined`
     * @function
     * @see {@link module:pgStructure.deserialize}
     */
    function parse(serializedDB: string): (Db | undefined);
    

    /**
     * Class which represent a PostgreSQL schema. Provides attributes and methods for details of the database.
     */
    class Schema {
        /**
         * Class which represent a PostgreSQL schema. Provides attributes and methods for details of the database.
         */
        constructor(args: { parent: Db, name: string });

        /**
         * @name Schema#name
         * @type {string}
         * @readonly
         * @description Name of the schema.
         */
        name: string;

        /**
         * @name Schema#fullName
         * @type {string}
         * @readonly
         * @description Full name of the {@link Schema}. For schema it is equal to schema name.
         * @example
         * var fullName = schema.fullName; // public
         */
        fullName: string;

        /**
         * @name Schema#fullCatalogName
         * @type {string}
         * @readonly
         * @description Full name of the {@link Schema} with (.) notation including catalog name.
         * @example
         * var fullCatalogName = schema.fullCatalogName; // crm.public
         */
        fullCatalogName: string;

        /**
         * @name Schema#db
         * @type {DB}
         * @readonly
         * @description {@link DB} this schema belongs to.
         * @see Aliases {@link Schema#parent parent}
         * @example
         * var db = schema.db; // DB instance
         */
        db: Db;

        /**
         * @name Schema#parent
         * @type {DB}
         * @readonly
         * @description {@link DB} this schema belongs to.
         * @see Aliases {@link Schema#db db}
         * @example
         * var db = schema.parent; // DB instance
         */
        parent: Db;

        /**
         * @name Schema#tables
         * @type {Map<string, Table>}
         * @readonly
         * @description All {@link Table} instances of the schema as a {@link Map}. They are ordered by their name.
         * @see {@link Map}
         * @example
         * let isAvailable  = schema.tables.has('person');
         * let tableNames   = Array.from(schema.tables.keys());        // Use spread operator to get table names as an array.
         * let table        = schema.tables.get('account');
         * let name         = table.name;
         *
         * for (let table of schema.tables.values()) {
         *     console.log(table.name);
         * }
         *
         * for (let [name, table] of schema.tables) {
         *     console.log(name, table.name);
         * }
         */
        tables: Map<string, Table>;

        /**
         * Returns {@link Table} or {@link Column} on given path relative to {@link Schema}. Path should be in dot (.) notation.
         * @method Schema#get
         * @param {string}                      path    - Path of the requested item in dot (.) notation such as 'public.contact'
         * @returns {Table|Column|undefined}            - Requested item.
         * @example
         * var table  = db.get('contact'),      // Returns contact table in public schema.
         *     column = db.get('contact.name'); // Returns name column of the contact table.
         */
        get(path: string): (Table | Column | undefined);

    }

    /**
     * Class which represent a table. Provides attributes and methods for details of the table. Tables have relationships
     * with other tables.
     *
     * <span id="exampleSchema"></span>Below is a database schema which is used in code examples.
     * ```
     * size -------------------
     * id (PK)                |  ---------------------------< line_item >------------ cart
     * name                   |  |                            product_id (PFK)        id (PK)
     *                        |  |                            cart_id    (PFK)        name
     *                        ^  |
     * color -------------< product >------------- vendor
     * id (PK)              id        (PK)         id (PK)
     * name                 name                   name
     *                      color_id  (FK)
     *                      size_id   (FK)
     *                      vendor_id (FK)
     * ```
     * Below is the same schema as image:
     * ![Database Schema](../../images/schema-through.png)
     */
    class Table {
        /**
         * Class which represent a table. Provides attributes and methods for details of the table. Tables have relationships
         * with other tables.
         *
         * <span id="exampleSchema"></span>Below is a database schema which is used in code examples.
         * ```
         * size -------------------
         * id (PK)                |  ---------------------------< line_item >------------ cart
         * name                   |  |                            product_id (PFK)        id (PK)
         *                        |  |                            cart_id    (PFK)        name
         *                        ^  |
         * color -------------< product >------------- vendor
         * id (PK)              id        (PK)         id (PK)
         * name                 name                   name
         *                      color_id  (FK)
         *                      size_id   (FK)
         *                      vendor_id (FK)
         * ```
         * Below is the same schema as image:
         * ![Database Schema](../../images/schema-through.png)
         */
        constructor(args: { parent: Schema, name: string, description: string, descriptionData: Object });

        /**
         * @name Table#name
         * @type {string}
         * @readonly
         * @description Name of the table.
         */
        name: string;

        /**
         * @name Table#fullName
         * @type {string}
         * @readonly
         * @description Full name of the {@link Table} with (.) notation.
         * @example
         * var fullName = table.fullName; // public.account
         */
        fullName: string;

        /**
         * @name Table#fullCatalogName
         * @type {string}
         * @readonly
         * @description Full name of the {@link Table} with (.) notation including catalog name.
         * @example
         * var fullName = table.fullName; // crm.public.account
         */
        fullCatalogName: string;

        /**
         * @name Table#schema
         * @type {Schema}
         * @readonly
         * @description {@link Schema} this table belongs to.
         * @see Aliases {@link Table#parent parent}
         * @example
         * var schema = table.schema; // Schema instance
         */
        schema: Schema;

        /**
         * @name Table#parent
         * @type {Schema}
         * @readonly
         * @description {@link Schema} this table belongs to.
         * @see Aliases {@link Table#schema schema}
         * @example
         * var schema = table.parent; // Schema instance
         */
        parent: Schema;

        /**
         * @name Table#comment
         * @type {string}
         * @readonly
         * @description Comment of the table.
         * @see Aliases {@link Table#description description}
         */
        comment: string;

        /**
         * @name Table#commentData
         * @type {Object}
         * @readonly
         * @description JS Object extracted from table description. Object is expected as JSON data between `[PG-STRUCTURE]` and `[/PG-STRUCTURE]`
         * tags in description. Tags are case-insensitive.
         * For maximum comfort JSON parsing is made by [jsonic](https://www.npmjs.com/package/jsonic). It is a non-strict JSON parser. It is possible
         * to ommit quotes etc. Please see [jsonic](https://www.npmjs.com/package/jsonic) for details.
         * @see Aliases {@link Table#descriptionData descriptionData}
         * @example
         * let description = table.comment;             // -> 'This table holds account details. [PG-STRUCTURE]{ extraData: 2 }[/PGEN]'
         * let extra = table.commentData;               // -> { extraData: 2 }
         * console.log(table.commentData.extraData);    // -> 2
         */
        commentData: Object;

        /**
         * @name Table#description
         * @type {string}
         * @readonly
         * @description Comment of the table.
         * @see Aliases {@link Table#comment comment}
         */
        description: string;

        /**
         * @name Table#descriptionData
         * @type {Object}
         * @readonly
         * @description JS Object extracted from table description. Object is expected as JSON data between `[PG-STRUCTURE]` and `[/PG-STRUCTURE]`
         * tags in description. Tags are case-insensitive.
         * For maximum comfort JSON parsing is made by [jsonic](https://www.npmjs.com/package/jsonic). It is a non-strict JSON parser. It is possible
         * to ommit quotes etc.
         * * You don't need to quote property names: { foo:"bar baz", red:255 }
         * * You don't need the top level braces: foo:"bar baz", red:255
         * * You don't need to quote strings with spaces: foo:bar baz, red:255
         * * You do need to quote strings if they contain a comma or closing brace or square bracket: icky:",}]"
         * * You can use single quotes for strings: Jules:'Cry "Havoc," and let slip the dogs of war!'
         * * You can have trailing commas: foo:bar, red:255,
         * For details, please see [jsonic](https://www.npmjs.com/package/jsonic).
         * @see Aliases {@link Table#commentData commentData}
         * @example
         * let description = table.description;             // -> 'This table holds account details. [PG-STRUCTURE]{ "extraData": 2 }[/PGEN]'
         * let extra = table.descriptionData;               // -> { extraData: 2 }
         * console.log(table.descriptionData.extraData);    // -> 2
         */
        descriptionData: Object;

        /**
         * @name Table#columns
         * @type {Map<string, Column>}
         * @readonly
         * @description All {@link Column} instances in the table as a {@link Map}. They are ordered same order as they are
         * defined in database table.
         * @see {@link Map}
         * @example
         * var isAvailable  = table.columns.has('id');
         * var columnNames  = Array.from(schema.columns.keys());       // Use spread operator to get column names as an array.
         * var column       = table.columns.get('user_id');
         * var name         = column.name;
         *
         * for (let column of table.columns.values()) {
         *     console.log(column.name);
         * }
         *
         * for (let [name, column] of table.columns) {
         *     console.log(name, column.name);
         * }
         */
        columns: Map<string, Column>;

        /**
         * @name Table#constraints
         * @type {Map<string, Constraint>}
         * @readonly
         * @description All {@link Constraint} instances in the table as a {@link Map}. They are ordered by name.
         */
        constraints: Map<string, Constraint>;

        /**
         * @name Table#db
         * @type {DB}
         * @readonly
         * @description {@link DB} this table belongs to.
         */
        db: Db;

        /**
         * @name Table#foreignKeyConstraints
         * @type {Map<string, Constraint>}
         * @readonly
         * @description All {@link Constraint} instances which are foreign key constraints in the table as a {@link Map}.
         * @see {@link Table#o2mRelations o2mRelations}, {@link Table#m2oRelations m2oRelations}, {@link Table#m2mRelations m2mRelations} to get more details about relations.
         */
        foreignKeyConstraints: Map<string, Constraint>;

        /**
         * @name Table#foreignKeyColumns
         * @type {Map<string, Column>}
         * @readonly
         * @description All foreign key {@link Column columns} of all {@link Table#foreignKeyConstraints foreignKeyConstraints} as a {@link Map}.
         * Foreign key {@link Constraint constraints} may contain more than one column. To get foreign key columns of a specific foreign key constraint
         * use {@link Table#foreignKeyConstraints}.{@link Constraint#columns columns}
         */
        foreignKeyColumns: Map<string, Column>;

        /**
         * @name Table#foreignKeyConstraintsToThis
         * @type {Map<string, Constraint>}
         * @readonly
         * @description All foreign key {@link Constraint} instances which are referring to this table as a {@link Map}.
         * @see {@link Table#o2mRelations o2mRelations}, {@link Table#m2oRelations m2oRelations}, {@link Table#m2mRelations m2mRelations} to get more details about relations.
         */
        foreignKeyConstraintsToThis: Map<string, Constraint>;

        /**
         * @name Table#primaryKeyConstraint
         * @type {Constraint|undefined}
         * @readonly
         * @description Primary key {@link Constraint constraint} instance of this table.
         * @see {@link Table#primaryKeyColumns primaryKeyColumns} to get primary key columns directly.
         * @example
         * let pkConstraint = table.primaryKeyConstraint;
         * let pkColumns    = Array.from(pkConstraint.columns.values());   // As an array
         *
         * for (let [name, column] of pkConstraint.columns) {
         *     console.log(column.name);
         * }
         */
        primaryKeyConstraint: (Constraint | undefined);

        /**
         * @name Table#primaryKeyColumns
         * @type {Map<string, Column>}
         * @readonly
         * @description Primary key {@link Column columns} of this table as a {@link Map}.
         * @see {@link Table#primaryKeyConstraint primaryKeyConstraint} to get primary key constraint.
         * @example
         * let pkColumns  = Array.from(table.primaryKeyColumns.values());  // As an array
         * for (let [name, column] of pkConstraint.columns) {
         *     console.log(column.name);
         * }
         */
        primaryKeyColumns: Map<string, Column>;

        /**
         * @name Table#hasManyTables
         * @type {Map<string, Table>}
         * @readonly
         * @description {@link Table Tables} sorted by name, which this table has relationship of type `one to many`.
         * @see [Example schema](#exampleSchema), {@link Map}
         * @example
         * for (let [name, table] of vendorTable.hasManyTables) {
         *     console.log(table.name);
         * }
         */
        hasManyTables: Map<string, Table>;

        /**
         * @name Table#belongsToTables
         * @type {Map<string, Table>}
         * @readonly
         * @description {@link Table Tables} sorted by name, which this table has relationship of type `belongs to` which is reverse direction of `one to many`.
         * @see [Example schema](#exampleSchema), {@link Map}
         * @example
         * for (let [name, table] of productTable.belongsToTables) {
         *     console.log(table.name);
         * }
         */
        belongsToTables: Map<string, Table>;

        /**
         * @name Table#belongsToManyTables
         * @type {Map<string, Table>}
         * @readonly
         * @description {@link Table Tables} sorted by name, which this table has relationship of type `many to many`.
         * @see [Example schema](#exampleSchema), {@link Map}
         * @example
         * // Cart (id) has many products (id) through line_item join table.
         * for (let [name, table] of cartTable.belongsToManyTables) {
         *     console.log(table.name);
         * }
         */
        belongsToManyTables: Map<string, Table>;

        /**
         * @name Table#belongsToManyTablesPk
         * @type {Map<string, Table>}
         * @readonly
         * @description {@link Table Tables} sorted by name, which this table has relationship of type `many to many`. Includes
         * only tables joined by primary keys in join table.
         * @see [Example schema](#exampleSchema), {@link Map}
         * @example
         * // Cart (id) has many products (id) through line_item join table.
         * for (let [name, table] of cartTable.belongsToManyTables) {
         *     console.log(table.name);
         * }
         */
        belongsToManyTablesPk: Map<string, Table>;

        /**
         * @name Table#m2mRelations
         * @type {Set<M2MRelation>}
         * @readonly
         * @description Set of {@link M2MRelation many to many relationships} of the table. {@link M2MRelation} resembles
         * `has many through` and `belongs to many` relations in ORMs. It has some useful methods and information for generating ORM classes.
         */
        m2mRelations: Set<M2MRelation>;

        /**
         * @name Table#m2mRelationsPk
         * @type {Set<M2MRelation>}
         * @readonly
         * @description Set of {@link M2MRelation many to many relationships} of the table. Different from {@link Table#m2mRelations m2mRelations}
         * this only includes relations joined by `Primary Foreign Keys` in join table. `Primary Foreign Keys` means
         * foreign keys of join table which are also Primary Keys of join table at the same time.
         * {@link M2MRelation} resembles `has many through` and `belongs to many` relations in ORMs.
         * It has some useful methods and information for generating ORM classes.
         */
        m2mRelationsPk: Set<M2MRelation>;

        /**
         * @name Table#o2mRelations
         * @type {Set<O2MRelation>}
         * @readonly
         * @description Set of {@link O2MRelation one to many relationships} of the table. {@link O2MRelation} resembles
         * `has many` relations in ORMs. It has some useful methods and information for generating ORM classes.
         */
        o2mRelations: Set<O2MRelation>;

        /**
         * @name Table#m2oRelations
         * @type {Set<M2ORelation>}
         * @readonly
         * @description Set of {@link M2ORelation many to one relationships} of the table. {@link M2ORelation} resembles
         * `belongs to` relations in ORMs. It has some useful methods and information for generating ORM classes.
         */
        m2oRelations: Set<M2ORelation>;

        /**
         * @name Table#relations
         * @type {Array<O2MRelation|M2ORelation|M2MRelation>}
         * @readonly
         * @description List of all relationships of the table.
         */
        relations: (O2MRelation | M2ORelation | M2MRelation)[];

        /**
         * Returns {@link Column} on given path relative to {@link Table}.
         * @method Table#get
         * @param {string}                  path    - Path of the requested item in dot (.) notation such as 'public.contact'
         * @returns {Column|undefined}              - Requested item.
         * @example
         * var column = table.get('contact'),      // Returns contact column in public table.
         */
        get(path: string): (Column | undefined);

    }

    /**
     * Strips given string from start of the source string.
     * @param   {string}            source  - Source string to be cleaned.
     * @param   {string}            strip   - String to delete from beginning of source string.
     * @returns {string}                    - Cleaned string.
     */
    function stripPrefix(source: string, strip: string): string;

    /**
     * Converts foreign key name to be used in a relationship. If string ends with '_id' or 'id', strips it (case insensitive).
     * Otherwise adds given prefix at the beginning of the string. company_id -> company, account -> related_account
     * @param   {string}    str              - Foreign key name.
     * @returns {string}                     - Name for the belongsTo relationship.
     */
    function fkToRelationName(str: string): string;

    /**
     * Extracts JSON between `[JSON]` and `[/JSON]` tags, converts it to object and returns created object.
     * @param   {string} str    - String to extract JSON from.
     * @returns {Object}        - Object created from JSON.
     * @example
     * let meta = 'Description of table.[JSON]{"key": "value"}[/PGEN]'; // meta = { key: 'value' }
     */
    function extractJSON(str: string): Object;

    /**
     * Replaces JSON between `[JSON]` and `[/JSON]` tags including tags.
     * @param   {string} str    - String to replace JSON part.
     * @returns {string}        - New string.
     */
    function replaceJSON(str: string): string;

    /**
     * Returns a function which does following jobs:
     * * If cache is in use (default), calculates, caches and returns requested data.
     * * In subsequent requests returns cached data.
     * * Compares cached data's version against source data's version and if it is expired recalculates it.
     * * If cache is not in use, directly returns result.
     * @param {Object}      args                    - Configuration
     * @param {WeakMap}     args.data               - Variable which holds class private data as weakmap.
     * @param {String}      args.cacheKey           - Cache key to retrieve and store result.
     * @param {String}      args.calculatedFrom     - Source of data. This is used to determine if cache is expired by comparing it's version.
     * @param {Function}    args.calculator         - Actual function which calculates result. Called as method of it's class so `this` object is set.
     * @param {Object}      [args.collectionClass]  - Collection class to store result. i.e. CMap, CSet, ConstraintMap etc.
     * @returns {Function}                          - Function for retrieving data.
     * @private
     */
    function cachedValue(args: { data: WeakMap<any, any>, cacheKey: String, calculatedFrom: String, calculator: (() => any), collectionClass: Object }): (() => any);

    /**
     * Copies given attributes of an pg-structure object to another object and returns it.
     * @param   {Object}            data    - Data to serialize.
     * @param   {Array<string>}    keys    - Keys to be serialized.
     * @returns {Object}                    - Serialized object.
     */
    function serialize(data: Object, keys: string[]): Object;

    /**
     * PostgreSQL data types as returned by {@link Column#type} and {@link Column#userDefinedType}.
     * @enum {string}
     * @readonly
     */
    enum postgreSQLDataType {
        array,
        bigint,
        bigserial,
        bit,
        "bit varying",
        boolean,
        box,
        bytea,
        character,
        "character varying",
        cidr,
        circle,
        date,
        "double precision",
        hstore,
        inet,
        integer,
        interval,
        json,
        jsonb,
        line,
        lseg,
        macaddr,
        money,
        numeric,
        path,
        point,
        polygon,
        real,
        smallint,
        smallserial,
        serial,
        text,
        "time without time zone",
        "time with time zone",
        "timestamp without time zone",
        "timestamp with time zone",
        tsquery,
        tsvector,
        txid_snapshot,
        uuid,
        xml
    }

    /**
     * Referential constraint rules.
     * @enum {string}
     * @readonly
     */
    enum constraintRule {
        /**
         * Specifies that when a referenced row is deleted, row(s) referencing it should be automatically deleted as well.
         */
        CASCADE,
        /**
         * These cause the referencing column(s) in the referencing row(s) to be set to nulls, respectively, when the referenced row is deleted.
         */
        "SET NULL",
        /**
         * These cause the referencing column(s) in the referencing row(s) to be set to default values, respectively, when the referenced row is deleted.
         */
        "SET DEFAULT",
        /**
         * Prevents deletion of a referenced row
         */
        RESTRICT,
        /**
         * Means that if any referencing rows still exist when the constraint is checked, an error is raised;
         */
        "NO ACTION"
    }

}

declare function pgStructure(connection: pg.Client|pgStructure.IpgOptions, options?: {}): Promise<pgStructure.Db>;
declare function pgStructure(connection: pg.Client|pgStructure.IpgOptions, schemas?: string[]|string, options?: {}): Promise<pgStructure.Db>;

export = pgStructure;