export declare type ProfileData = {
    name: string,
    player_name: string,
    age: string,
    lace: string,
    sex: string,
    lace_ability: string,
    lineage: string
}

export declare type BaseStatusData = {
    skill: number,
    setSkill: Function,
    body: number,
    setBody: Function,
    mental: number,
    setMental: Function,

    a: number,
    setA: Function,
    b: number,
    setB: Function,
    c: number,
    setC: Function,
    d: number,
    setD: Function,
    e: number,
    setE: Function,
    f: number,
    setF: Function,

    a_growth: number,
    setAGrowth: Function,
    b_growth: number,
    setBGrowth: Function,
    c_growth: number,
    setCGrowth: Function,
    d_growth: number,
    setDGrowth: Function,
    e_growth: number,
    setEGrowth: Function,
    f_growth: number,
    setFGrowth: Function,

    // a_dex: number,
    // b_agi: number,
    // c_str: number,
    // d_vit: number,
    // e_int: number,
    // f_mnd: number,
    //
    // a_bonus: number,
    // b_bonus: number,
    // c_bonus: number,
    // d_bonus: number,
    // e_bonus: number,
    // f_bonus: number
}

export declare type MainSpec = {}

export declare type LevelsData = {
    exp: number,
    setExp: Function,
    jobCollection: JobCollection[]
}

export declare type Magic = {
    key: number,
    label: string,
    description: string
}

export declare type BattleSkill = {
    key: number,
    label: string,
    description: string
}

export declare type Job = {
    type: JobType,
    label: string,
    table: 'A' | 'B',
    magical: boolean
}

export declare type JobType = 'fighter'
    | 'grappler'
    | 'fencer'
    | 'shooter'
    | 'sorcerer'
    | 'conjuror'
    | 'priest'
    | 'magitec'
    | 'scout'
    | 'ranger'
    | 'sage'
    | 'enhancer'

export const JOBS: Record<JobType, Job> = {
    'fighter': {type: 'fighter', label: 'ファイター', table: 'A', magical: false},
    'grappler': {type: 'grappler', label: 'グラップラー', table: 'A', magical: false},
    'fencer': {type: 'fencer', label: 'フェンサー', table: 'B', magical: false},
    'shooter': {type: 'shooter', label: 'シューター', table: 'B', magical: false},
    'sorcerer': {type: 'sorcerer', label: 'ソーサラー', table: 'A', magical: true},
    'conjuror': {type: 'conjuror', label: 'コンジャラー', table: 'A', magical: true},
    'priest': {type: 'priest', label: 'プリースト', table: 'A', magical: true},
    'magitec': {type: 'magitec', label: 'マギテック', table: 'A', magical: true},
    'scout': {type: 'scout', label: 'スカウト', table: 'B', magical: false},
    'ranger': {type: 'ranger', label: 'レンジャー', table: 'B', magical: false},
    'sage': {type: 'sage', label: 'セージ', table: 'B', magical: false},
    'enhancer': {type: 'enhancer', label: 'エンハンサー', table: 'B', magical: false}
}

export declare type JobCollection = {
    jobType: JobType,
    level: number
}