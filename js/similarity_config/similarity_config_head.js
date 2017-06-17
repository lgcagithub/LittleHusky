let SimilarityConfig = {
    _configSet:{},

    AddConfig:function(lang, config) {
        this._configSet[lang] = config;
    },

    GetConfig:function(lang) {
        return this._configSet[lang];
    },

    Init:function() {
        for (var lang in this._configSet) {
            var config = this._configSet[lang];
            config.Init();
        }
    },

    DefaultLanguageConfigInit:function(config) {
        let charSets = config._similarCharacterSet;
        let charInfos = config._charactersInfo;

        if(!charSets || !charInfos) {
            return;
        }

        let len1 = charSets.length;
        for (var idx1 = 0; idx1 < len1; idx1++) {
            var charSet = charSets[idx1];
            var len2 = charSet.length;
            for (var idx2 = 0; idx2 < len2; idx2++) {
                var character = charSet[idx2];
                charInfos[character] = [idx1, idx2];
            }
        }
    },

    DefaultLanguageConfigGetDistance:function(config, char1, char2) {
        if(char1 == char2) return 0;

        let charSets = config._similarCharacterSet;
        let charInfos = config._charactersInfo;

        if(!charSets || !charInfos) {
            return 1;
        }

        let charInfo1 = charInfos[char1];
        let charInfo2 = charInfos[char2];

        if(!charInfo1 || !charInfo2) {
            return 1;
        }

        if(charInfo1[0] != charInfo2[0]) {
            return 1;
        }
        else {
            let charSetLength = charSets[charInfo1[0]].length;
            let distance = Math.abs(charInfo1[1] - charInfo2[1]);
            return distance * 1.0 / charSetLength;
        }
    },

    DefaultLanguageConfigGetSimilarity:function(config, char1, char2) {
        return 1 - this.DefaultLanguageConfigGetDistance(config, char1, char2);
    },
};