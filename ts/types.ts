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
    body: number,
    mental: number,

    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number,

    a_growth: number,
    b_growth: number,
    c_growth: number,
    d_growth: number,
    e_growth: number,
    f_growth: number,

    exp: number
}

export declare type MainSpec = {}

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

export declare type LanguageSource = {
    slug: string,
    name: string,
    speakable: ThreeStates,
    readable: ThreeStates,
}

export declare type ThreeStates = 0 | 1 | 2

export const basicLanguageSources: LanguageSource[] = [
    {slug: 'common', name: '交易共通語', speakable: 1, readable: 1},
    {slug: 'god', name: '神紀文明語', speakable: 0, readable: 1},
    {slug: 'magic', name: '魔法文明語', speakable: 1, readable: 1},
    {slug: 'magitec', name: '魔動機文明語', speakable: 1, readable: 1},
    {slug: 'fairy', name: '妖精語', speakable: 1, readable: 0},
    {slug: 'devil', name: '魔神語', speakable: 1, readable: 0},
    {slug: 'savage', name: '汎用蛮族語', speakable: 1, readable: 1},
]