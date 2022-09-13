# File: /docker/Makefile
# Project: apache-age-client
# File Created: 13-09-2022 07:52:06
# Author: Clay Risser
# -----
# Last Modified: 13-09-2022 07:52:43
# Modified By: Clay Risser
# -----
# Risser Labs LLC (c) Copyright 2022
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

include ../mkpm.mk
ifneq (,$(MKPM_READY))
include $(MKPM)/gnu

export DOCKER_COMPOSE := docker-compose
export CONTEXT := .
export NAME := age
export VERSION := 0.0.1

include $(MKPM)/docker

endif
