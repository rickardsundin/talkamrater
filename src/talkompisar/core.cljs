(ns talkompisar.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(def app-state (atom {:total 5}))

(defn mattetal
  [first total]
  (str first " + " (- total first) " = " total))

(defui Talkompisar
  Object
  (render [this]
          (let [{:keys [total]} (om/props this)]
            (dom/div #js {:className "container"}
                     (dom/p #js {:className "btn-toolbar"}
                              (dom/div #js {:className "btn-group"}
                                       (dom/button #js {:className "btn btn-default"
                                                        :onClick (fn [e] (swap! app-state update-in [:total] dec))}
                                                   (dom/span #js {:className "glyphicon glyphicon-minus"}))
                                       (dom/button #js {:className "btn btn-default"
                                                        :onClick (fn [e] (swap! app-state update-in [:total] inc))}
                                                   (dom/span #js {:className "glyphicon glyphicon-plus"}))))
            (dom/div #js {:className "container text-center"}
                     (dom/div #js {:className "panel panel-primary"}
                              (dom/div #js {:className "panel-heading"}
                                       (dom/h2 nil (str total "-kompisar")))
                              (dom/div #js {:className "panel-body"}
                                       (map #(dom/h3 nil (mattetal % total)) (range (inc total))))))))))

  (def reconciler (om/reconciler {:state app-state}))

  (om/add-root! reconciler Talkompisar (gdom/getElement "app"))

