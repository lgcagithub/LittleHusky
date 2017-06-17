// 越南语29个字母大小写
// A a    Ă ă   Â â    B b    C c    D d    Đđ   
// E e    Ê ê   G g    H h    I i    K k    L l        
// M m    N n   O o    Ô ô    Ơ ơ    P p    Qq      
// R r    S s   T t    U u    Ư ư    V v    X x   Y y

let SimilarityConfig_vie = {
    _similarCharacterSet:[
        [
            'A', 'À', 'Á', 'Ạ', 'Ã', 'Ả', 
            'Ă', 'Ằ', 'Ắ', 'Ặ', 'Ẵ', 'Ẳ',
            'Â', 'Ầ', 'Ấ', 'Ậ', 'Ẫ', 'Ẩ',
            'a', 'à', 'á', 'ạ', 'ã', 'ả',
            'ă', 'ằ', 'ắ', 'ặ', 'ẵ', 'ẳ',
            'â', 'ầ', 'ấ', 'ậ', 'ẫ', 'ẩ',
        ],
        ['B', 'b'],
        ['C', 'c'],
        ['D', 'Đ', 'd', 'đ'],
        [
            'E', 'È', 'É', 'Ẹ', 'Ẽ', 'Ẻ',
            'Ê', 'Ề', 'Ế', 'Ệ', 'Ễ', 'Ể',
            'e', 'è', 'é', 'ẹ', 'ẽ', 'ẻ',
            'ê', 'ề', 'ế', 'ệ', 'ễ', 'ể',
        ],
        ['G', 'g'],
        ['H', 'N', 'h', 'n'],
        [
            'I', 'Ì', 'Í', 'Ị', 'Ĩ', 'Ỉ', 
            'L', 
            'i', 'ì', 'í', 'ị', 'ĩ', 'ỉ',
            'l',
        ],
        ['K', 'k'],
        ['M', 'm'],
        [
            'O', 'Ò', 'Ó', 'Ọ', 'Õ', 'Ỏ',
            'o', 'ò', 'ó', 'ọ', 'õ', 'ỏ',
            'Ô', 'Ồ', 'Ố', 'Ộ', 'Ỗ', 'Ổ',
            'ô', 'ồ', 'ố', 'ộ', 'ỗ', 'ổ',
            'Ơ', 'Ờ', 'Ớ', 'Ợ', 'Ỡ', 'Ở',
            'ơ', 'ờ', 'ớ', 'ợ', 'ỡ', 'ở',
        ],
        ['P', 'p', 'Q', 'q'],
        ['R', 'r'],
        ['S', 's'],
        ['T', 't'],
        [
            'U', 'Ù', 'Ú', 'Ụ', 'Ũ', 'Ủ',
            'Ư', 'Ừ', 'Ứ', 'Ự', 'Ữ', 'Ử',
            'u', 'ù', 'ú', 'ụ', 'ũ', 'ủ',
            'ư', 'ừ', 'ứ', 'ự', 'ữ', 'ử',
        ],
        [
            'V', 
            'v', 
            'Y', 'Ỳ', 'Ý', 'Ỵ', 'Ỹ', 'Ỷ',
            'y', 'ỳ', 'ý', 'ỵ', 'ỹ', 'ỷ',
        ],
        ['X', 'x'],
    ],

    _charactersInfo:{},

    Init:function() {
        SimilarityConfig.DefaultLanguageConfigInit(this);
    },

    GetDistance:function(char1, char2) {
        return SimilarityConfig.DefaultLanguageConfigGetDistance(this, char1, char2);
    },

    GetSimilarity:function(char1, char2) {
        return SimilarityConfig.DefaultLanguageConfigGetSimilarity(this, char1, char2);
    },
};

SimilarityConfig.AddConfig("vie", SimilarityConfig_vie);
