export const textStyles = {
    DISPLAY_LARGE: { fontSize: 56, lineHeight: 64 },
    DISPLAY_MEDIUM: { fontSize: 42, lineHeight: 52 },
    DISPLAY_SMALL: { fontSize: 34, lineHeight: 44 },
  
    HEADLINE_LARGE: { fontSize: 30, lineHeight: 40 },
    HEADLINE_MEDIUM: { fontSize: 28, lineHeight: 36 },
    HEADLINE_SMALL: { fontSize: 24, lineHeight: 32 },
  
    TITLE_XTRA_LARGE: { fontSize: 22, lineHeight: 28 },
    TITLE_LARGE: { fontSize: 18, lineHeight: 28 },
    TITLE_MEDIUM: { fontSize: 16, lineHeight: 24 },
    TITLE_SMALL: { fontSize: 14, lineHeight: 20 },
  
    LABEL_LARGE: { fontSize: 14, lineHeight: 20 },
    LABEL_MEDIUM_LARGE: { fontSize: 13, lineHeight: 18 },
    LABEL_MEDIUM: { fontSize: 12, lineHeight: 16 },
    LABEL_SMALL: { fontSize: 11, lineHeight: 16 },
    LABEL_XTRA_SMALL: { fontSize: 9, lineHeight: 14 },
  
    BODY_LARGE: { fontSize: 16, lineHeight: 24 },
    BODY_MEDIUM: { fontSize: 14, lineHeight: 20 },
    BODY_SMALL: { fontSize: 12, lineHeight: 16 },
  };
  
  export const TEXT_VARIANT_MAPPING = new Map([
    ['DISPLAY_LARGE', { fontSize: 56, lineHeight: 64 }],
    ['DISPLAY_MEDIUM', { fontSize: 42, lineHeight: 52 }],
    ['DISPLAY_SMALL', { fontSize: 34, lineHeight: 44 }],
  
    ['HEADLINE_LARGE', { fontSize: 30, lineHeight: 40 }],
    ['HEADLINE_MEDIUM', { fontSize: 28, lineHeight: 36 }],
    ['HEADLINE_SMALL', { fontSize: 24, lineHeight: 32 }],
  
    ['TITLE_XTRA_LARGE', { fontSize: 22, lineHeight: 28 }],
    ['TITLE_LARGE', { fontSize: 18, lineHeight: 28 }],
    ['TITLE_MEDIUM', { fontSize: 16, lineHeight: 24 }],
    ['TITLE_SMALL', { fontSize: 14, lineHeight: 20 }],
  
    ['LABEL_LARGE', { fontSize: 14, lineHeight: 20 }],
    ['LABEL_MEDIUM_LARGE', { fontSize: 13, lineHeight: 18 }],
    ['LABEL_MEDIUM', { fontSize: 12, lineHeight: 16 }],
    ['LABEL_SMALL', { fontSize: 11, lineHeight: 16 }],
    ['LABEL_XTRA_SMALL', { fontSize: 9, lineHeight: 14 }],
  
    ['BODY_LARGE', { fontSize: 16, lineHeight: 24 }],
    ['BODY_MEDIUM', { fontSize: 14, lineHeight: 20 }],
    ['BODY_SMALL', { fontSize: 12, lineHeight: 16 }],
  ]);
  
  // Color Getter Utilities
  export const getObjectKey = (
    object: Record<string, unknown>,
    path: Array<string>,
    index = 0,
  ): string => {
    const key = path[index];
    if (key === undefined) {
      return '';
    }
    const result = object[key];
    if (result === undefined) {
      return '';
    }
  
    if (typeof result === 'string') {
      return result;
    }
  
    if (Array.isArray(result)) {
      return result[0];
    }
    return getObjectKey(Object(result), path, index + 1);
  };
  