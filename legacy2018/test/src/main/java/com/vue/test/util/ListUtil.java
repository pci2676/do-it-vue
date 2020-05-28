package com.vue.test.util;

import java.util.ArrayList;
import java.util.List;

public class ListUtil {

    public static List getList(List list) {
        if (list == null) {
            return new ArrayList<>();
        }
        return list;
    }
}
